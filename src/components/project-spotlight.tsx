import { ArrowRight, Globe } from "lucide-react";
import type { Project } from "@/lib/types";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { StatusBadge } from "./ui/status-badge";
import { ProjectVisual } from "./project-card";

/** Large homepage feature for the top-priority featured project. */
export function ProjectSpotlight({ project }: { project: Project }) {
  const highlights = project.caseStudy.keyFeatures.slice(0, 5);

  return (
    <Reveal>
      <article className="group overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="order-2 flex flex-col p-7 sm:p-10 lg:order-1 lg:col-span-5 lg:p-12">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Featured project
              </span>
              <StatusBadge status={project.status} />
            </div>

            <h3 className="text-3xl font-medium tracking-tight text-text sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-4 text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
              {project.summary}
            </p>

            {highlights.length > 0 ? (
              <ul className="mt-7 space-y-3 border-t border-border pt-7">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`/work/${project.slug}`} icon={<ArrowRight size={15} />}>
                See how it works
              </Button>
              {project.demo ? (
                <Button
                  href={project.demo}
                  external
                  variant="secondary"
                  icon={<Globe size={14} />}
                >
                  {project.demoLabel ?? "Live demo"}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="order-1 overflow-hidden border-b border-border bg-bg-elevated lg:order-2 lg:col-span-7 lg:flex lg:items-center lg:border-b-0 lg:border-l lg:py-12 lg:pl-12">
            {/* Framed at the screenshot's own 16:10 ratio so nothing important is cropped. */}
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:rounded-l-xl lg:border lg:border-r-0 lg:border-border-strong">
              <ProjectVisual
                project={project}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
