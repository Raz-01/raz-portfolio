import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { StatusBadge } from "./ui/status-badge";
import { Reveal } from "./ui/reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /[a-zA-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** The project's screenshot, or a plain monogram when there isn't one. Never a fabricated image. */
export function ProjectVisual({
  project,
  sizes,
  priority = false,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  if (project.screenshot) {
    return (
      <Image
        src={project.screenshot}
        alt={`Screenshot of ${project.name}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-5xl font-medium tracking-tighter text-text-faint">
        {initials(project.name)}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  size = "default",
}: {
  project: Project;
  index?: number;
  size?: "default" | "wide";
}) {
  const wide = size === "wide";

  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-bg-elevated">
          <ProjectVisual
            project={project}
            sizes={
              wide
                ? "(min-width: 768px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
          />
          <span className="absolute right-3 top-3 rounded-full bg-bg/85 backdrop-blur-sm">
            <StatusBadge status={project.status} />
          </span>
        </div>

        <div className={`flex flex-1 flex-col ${wide ? "p-6 md:p-8" : "p-6"}`}>
          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-accent">
            {project.category.join(" · ")}
          </p>

          <h3 className={`font-medium text-text ${wide ? "text-2xl" : "text-xl"}`}>
            <Link
              href={`/work/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted md:text-[15px]">
            {wide ? project.summary : project.tagline}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors group-hover:text-accent-bright">
            View project
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
