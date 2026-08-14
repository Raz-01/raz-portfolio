"use client";

import { useMemo, useState } from "react";
import { allProjectsSorted } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/types";
import { ProjectCard } from "./project-card";

const categories: ProjectCategory[] = [
  "Web Development",
  "E-commerce",
  "AI & Automation",
  "Blockchain / Web3",
  "Mobile",
  "Business Application",
];

export function WorkGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? allProjectsSorted
        : allProjectsSorted.filter((p) => p.category.includes(active)),
    [active]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              active === c
                ? "border-accent-border bg-accent-dim text-accent-bright"
                : "border-border text-text-faint hover:border-border-strong hover:text-text-muted"
            }`}
          >
            {c}
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
