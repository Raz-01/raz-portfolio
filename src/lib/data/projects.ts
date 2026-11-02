import "server-only";
import { eq, asc } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { projectsTable, type ProjectRow } from "@/lib/db/schema";
import type { Project } from "@/lib/types";
import { normalizeCategories } from "@/lib/data/constants";

function toProject(row: ProjectRow): Project {
  return {
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    summary: row.summary,
    category: normalizeCategories(row.category),
    status: row.status,
    year: row.year,
    stack: row.stack,
    github: row.github ?? undefined,
    demo: row.demo ?? undefined,
    demoLabel: row.demoLabel ?? undefined,
    screenshot: row.screenshot ?? undefined,
    featured: row.featured,
    priority: row.priority,
    caseStudy: row.caseStudy,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  // Priority decides the order everywhere projects are listed; name breaks ties
  // so equal priorities still render in a stable order.
  const rows = await db
    .select()
    .from(projectsTable)
    .orderBy(asc(projectsTable.priority), asc(projectsTable.name));
  return rows.map(toProject);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const rows = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.slug, slug))
    .limit(1);
  return rows[0] ? toProject(rows[0]) : undefined;
}
