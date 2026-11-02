import type { ProjectCategory, ProjectStatus } from "@/lib/types";

/**
 * Project categories, in the order they appear as filters on /work and as
 * checkboxes in the admin form. To add a category, add it here and to the
 * ProjectCategory type in src/lib/types.ts.
 */
export const ALL_CATEGORIES: ProjectCategory[] = [
  "Business Software",
  "Websites",
  "Education",
  "E-commerce",
  "AI & Automation",
  "Mobile",
  "Blockchain / Web3",
];

/** Older category names still accepted when reading from the database. */
const LEGACY_CATEGORIES: Record<string, ProjectCategory> = {
  "Business Application": "Business Software",
  "Web Development": "Websites",
};

export function normalizeCategories(values: string[]): ProjectCategory[] {
  const out: ProjectCategory[] = [];
  for (const v of values) {
    const c = (LEGACY_CATEGORIES[v] ?? v) as ProjectCategory;
    if (ALL_CATEGORIES.includes(c) && !out.includes(c)) out.push(c);
  }
  return out;
}

export const ALL_STATUSES: ProjectStatus[] = [
  "Live",
  "In Progress",
  "Prototype",
  "Experimental",
  "Concept",
];
