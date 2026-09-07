import {
  pgTable,
  text,
  boolean,
  integer,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";
import type { CaseStudy, ProjectCategory, ProjectStatus } from "@/lib/types";

export const projectsTable = pgTable("projects", {
  slug: text("slug").primaryKey(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  summary: text("summary").notNull(),
  category: jsonb("category").$type<ProjectCategory[]>().notNull(),
  status: text("status").$type<ProjectStatus>().notNull(),
  year: text("year").notNull(),
  stack: jsonb("stack").$type<string[]>().notNull(),
  github: text("github"),
  demo: text("demo"),
  demoLabel: text("demo_label"),
  screenshot: text("screenshot"),
  featured: boolean("featured").notNull().default(false),
  priority: integer("priority").notNull().default(0),
  caseStudy: jsonb("case_study").$type<CaseStudy>().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type ProjectRow = typeof projectsTable.$inferSelect;
export type NewProjectRow = typeof projectsTable.$inferInsert;
