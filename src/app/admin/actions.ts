"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { put, del } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { projectsTable } from "@/lib/db/schema";
import { createSession, destroySession, isAuthenticated } from "@/lib/auth/session";
import type { ProjectCategory, ProjectStatus } from "@/lib/types";
import { ALL_STATUSES } from "@/lib/data/constants";

export interface LoginState {
  error?: string;
}

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!hash) {
    return { error: "Admin password isn't configured yet." };
  }

  const valid = await bcrypt.compare(password, hash);
  if (!valid) {
    return { error: "Incorrect password." };
  }

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

async function requireAuth() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
}

function readList(formData: FormData, key: string): string[] {
  return formData
    .getAll(key)
    .map((v) => String(v).trim())
    .filter(Boolean);
}

function readLines(formData: FormData, key: string): string[] {
  return String(formData.get(key) ?? "")
    .split("\n")
    .map((v) => v.trim())
    .filter(Boolean);
}

function readCsv(formData: FormData, key: string): string[] {
  return String(formData.get(key) ?? "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

function readOptional(formData: FormData, key: string): string | undefined {
  const v = String(formData.get(key) ?? "").trim();
  return v || undefined;
}

export interface SaveState {
  error?: string;
}

export async function saveProject(
  isNew: boolean,
  originalSlug: string | null,
  _prevState: SaveState,
  formData: FormData
): Promise<SaveState> {
  await requireAuth();

  const slug = String(formData.get("slug") ?? "").trim();
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return {
      error: "Slug must be lowercase letters, numbers, and hyphens only.",
    };
  }

  const category = readList(formData, "category") as ProjectCategory[];
  if (category.length === 0) {
    return { error: "Pick at least one category." };
  }

  const status = String(formData.get("status") ?? "") as ProjectStatus;
  if (!ALL_STATUSES.includes(status)) {
    return { error: "Pick a valid status." };
  }

  const values = {
    slug,
    name: String(formData.get("name") ?? "").trim(),
    tagline: String(formData.get("tagline") ?? "").trim(),
    summary: String(formData.get("summary") ?? "").trim(),
    category,
    status,
    year: String(formData.get("year") ?? "").trim(),
    stack: readCsv(formData, "stack"),
    github: readOptional(formData, "github"),
    demo: readOptional(formData, "demo"),
    demoLabel: readOptional(formData, "demoLabel"),
    screenshot: readOptional(formData, "screenshot"),
    featured: formData.get("featured") === "on",
    priority: Number(formData.get("priority") ?? 0) || 0,
    caseStudy: {
      idea: String(formData.get("csIdea") ?? "").trim(),
      problem: String(formData.get("csProblem") ?? "").trim(),
      solution: String(formData.get("csSolution") ?? "").trim(),
      role: String(formData.get("csRole") ?? "").trim(),
      keyFeatures: readLines(formData, "csKeyFeatures"),
      challenges: String(formData.get("csChallenges") ?? "").trim(),
      statusNote: String(formData.get("csStatusNote") ?? "").trim(),
    },
  };

  if (!values.name || !values.tagline || !values.summary) {
    return { error: "Name, tagline, and summary are required." };
  }

  if (isNew) {
    const existing = await db
      .select({ slug: projectsTable.slug })
      .from(projectsTable)
      .where(eq(projectsTable.slug, slug))
      .limit(1);
    if (existing.length > 0) {
      return { error: `A project with slug "${slug}" already exists.` };
    }
    await db.insert(projectsTable).values(values);
  } else {
    if (!originalSlug) {
      return { error: "Missing original slug for update." };
    }
    await db
      .update(projectsTable)
      .set(values)
      .where(eq(projectsTable.slug, originalSlug));
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}

export async function deleteProjectAction(slug: string) {
  await requireAuth();
  const [row] = await db
    .select({ screenshot: projectsTable.screenshot })
    .from(projectsTable)
    .where(eq(projectsTable.slug, slug))
    .limit(1);

  await db.delete(projectsTable).where(eq(projectsTable.slug, slug));

  if (row?.screenshot) {
    await del(row.screenshot).catch(() => {
      // Non-fatal: an orphaned blob isn't worth failing the delete over.
    });
  }

  revalidatePath("/", "layout");
}

export async function uploadScreenshot(
  formData: FormData
): Promise<{ url?: string; error?: string }> {
  await requireAuth();

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "No file provided." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "Only image files are allowed." };
  }

  const ext = file.name.split(".").pop() || "jpg";
  const key = `projects/${crypto.randomUUID()}.${ext}`;

  try {
    const blob = await put(key, file, {
      access: "public",
      addRandomSuffix: false,
    });
    return { url: blob.url };
  } catch {
    return {
      error:
        "Upload failed. The Blob store may not be connected to this project yet.",
    };
  }
}
