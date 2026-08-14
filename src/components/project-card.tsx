"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/lib/types";
import { StatusBadge } from "./ui/status-badge";
import { Reveal } from "./ui/reveal";
import { GithubIcon } from "./ui/icons";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /[a-zA-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong"
      >
        <Link
          href={`/work/${project.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View case study: ${project.name}`}
        />

        {/* Visual header — generated mark, not a fabricated screenshot */}
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-bg-elevated">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <span className="relative font-mono text-6xl font-medium tracking-tighter text-text-faint transition-colors duration-300 group-hover:text-accent-border">
            {initials(project.name)}
          </span>
          <span className="absolute left-4 top-4 font-mono text-xs text-text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-4 top-4">
            <StatusBadge status={project.status} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            {project.category.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <h3 className="text-xl font-medium text-text">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-faint"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 ? (
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-faint">
                +{project.stack.length - 4}
              </span>
            ) : null}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-surface-hover hover:text-text"
                  aria-label={`${project.name} on GitHub`}
                >
                  <GithubIcon size={15} />
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-surface-hover hover:text-text"
                  aria-label={`${project.name} live demo`}
                >
                  <Globe size={15} />
                </a>
              ) : null}
            </div>
            <span className="relative z-20 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-accent-bright">
              Case study
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
