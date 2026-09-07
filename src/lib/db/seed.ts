/**
 * One-time seed: loads the original hardcoded project list into the database.
 * Run with `npm run db:seed`. Safe to re-run (upserts by slug).
 */
import "./load-env";
import { db } from "./client";
import { projectsTable } from "./schema";
import { projects } from "../projects";
import { sql } from "drizzle-orm";

async function seed() {
  for (const p of projects) {
    await db
      .insert(projectsTable)
      .values({
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        summary: p.summary,
        category: p.category,
        status: p.status,
        year: p.year,
        stack: p.stack,
        github: p.github,
        demo: p.demo,
        demoLabel: p.demoLabel,
        screenshot: p.screenshot,
        featured: p.featured,
        priority: p.priority,
        caseStudy: p.caseStudy,
      })
      .onConflictDoUpdate({
        target: projectsTable.slug,
        set: {
          name: p.name,
          tagline: p.tagline,
          summary: p.summary,
          category: p.category,
          status: p.status,
          year: p.year,
          stack: p.stack,
          github: p.github,
          demo: p.demo,
          demoLabel: p.demoLabel,
          screenshot: p.screenshot,
          featured: p.featured,
          priority: p.priority,
          caseStudy: p.caseStudy,
          updatedAt: sql`now()`,
        },
      });
    console.log(`  seeded: ${p.slug}`);
  }
  console.log(`Done. ${projects.length} projects seeded.`);
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
