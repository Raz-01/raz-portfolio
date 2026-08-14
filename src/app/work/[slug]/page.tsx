import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { allProjectsSorted, getProject } from "@/lib/projects";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return allProjectsSorted.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

const sections = [
  { key: "idea", label: "The Idea" },
  { key: "problem", label: "The Problem" },
  { key: "solution", label: "The Solution" },
  { key: "role", label: "My Role" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = allProjectsSorted.findIndex((p) => p.slug === slug);
  const prev = allProjectsSorted[(idx - 1 + allProjectsSorted.length) % allProjectsSorted.length];
  const next = allProjectsSorted[(idx + 1) % allProjectsSorted.length];

  return (
    <article>
      <header className="border-b border-border pt-32 pb-16 md:pb-24">
        <div className="container-page">
          <Reveal>
            <Link
              href="/work"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-faint transition-colors hover:text-text"
            >
              <ArrowLeft size={13} />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mb-6 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs text-text-faint">{project.year}</span>
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {project.category.join(" · ")}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-text sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-lg text-text-muted sm:text-xl">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
            {project.demo ? (
              <Button href={project.demo} external icon={<Globe size={14} />}>
                {project.demoLabel ?? "Live demo"}
              </Button>
            ) : null}
            {project.github ? (
              <Button href={project.github} external variant="secondary" icon={<GithubIcon size={14} />}>
                View source
              </Button>
            ) : null}
            {!project.demo && !project.github ? (
              <span className="font-mono text-xs text-text-faint">
                Private repository — no public link available
              </span>
            ) : null}
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </div>
      </header>

      <div className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          <div className="space-y-14 md:col-span-7">
            {sections.map((s, i) => (
              <Reveal key={s.key} delay={Math.min(i * 0.05, 0.2)}>
                <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-border-strong" aria-hidden />
                </div>
                <h2 className="mb-3 text-2xl font-medium text-text">{s.label}</h2>
                <p className="text-balance leading-relaxed text-text-muted">
                  {project.caseStudy[s.key]}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                <span className="text-accent">05</span>
                <span className="h-px w-8 bg-border-strong" aria-hidden />
              </div>
              <h2 className="mb-3 text-2xl font-medium text-text">Challenges</h2>
              <p className="text-balance leading-relaxed text-text-muted">
                {project.caseStudy.challenges}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
                <span className="text-accent">06</span>
                <span className="h-px w-8 bg-border-strong" aria-hidden />
              </div>
              <h2 className="mb-3 text-2xl font-medium text-text">Status</h2>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5">
                <StatusBadge status={project.status} />
                <p className="text-sm leading-relaxed text-text-muted">
                  {project.caseStudy.statusNote}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.15} className="sticky top-28 space-y-8">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                  Key Features
                </p>
                <ul className="space-y-3">
                  {project.caseStudy.keyFeatures.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                  Technology
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-faint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <nav className="border-t border-border">
        <div className="container-page grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col gap-2 py-10 pr-0 sm:pr-8"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
              <ArrowLeft size={13} /> Previous
            </span>
            <span className="text-xl font-medium text-text transition-colors group-hover:text-accent-bright">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col items-start gap-2 py-10 pl-0 sm:items-end sm:pl-8"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
              Next <ArrowUpRight size={13} />
            </span>
            <span className="text-xl font-medium text-text transition-colors group-hover:text-accent-bright">
              {next.name}
            </span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
