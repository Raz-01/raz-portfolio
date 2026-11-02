"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/types";
import { ALL_CATEGORIES } from "@/lib/data/constants";
import { ProjectCard } from "./project-card";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  // Only offer filters that have at least one project behind them.
  const filters = useMemo(
    () =>
      ALL_CATEGORIES.map((c) => ({
        category: c,
        count: projects.filter((p) => p.category.includes(c)).length,
      })).filter((f) => f.count > 0),
    [projects]
  );

  // Projects arrive already sorted by CMS priority; filtering keeps that order.
  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category.includes(active)),
    [active, projects]
  );

  const chip = (selected: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
      selected
        ? "border-accent-border bg-accent-dim text-accent-bright"
        : "border-border text-text-muted hover:border-border-strong hover:text-text"
    }`;

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        <button
          type="button"
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
          className={chip(active === "All")}
        >
          All
          <span className="font-mono text-xs text-text-faint">{projects.length}</span>
        </button>
        {filters.map(({ category, count }) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={chip(active === category)}
          >
            {category}
            <span className="font-mono text-xs text-text-faint">{count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
