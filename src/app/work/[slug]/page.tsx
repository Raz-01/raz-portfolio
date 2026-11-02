import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/data/projects";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

// No generateStaticParams: projects are added/edited through /admin without
// a redeploy, so this route renders on demand and is cached (then busted via
// revalidatePath) rather than fixed to whatever existed at build time.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

// Ordered for a non-technical reader first: what it is, why it matters, what
// was built. The engineering detail follows for technical readers.
const sections = [
  { key: "idea", label: "Overview" },
  { key: "problem", label: "The problem" },
  { key: "solution", label: "What I built" },
  { key: "role", label: "My role" },
  { key: "challenges", label: "Technical challenges" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjects(),
  ]);
  if (!project) notFound();

  const idx = allProjects.findIndex((p) => p.slug === slug);
  const prev = allProjects[(idx - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(idx + 1) % allProjects.length];

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
                Source code is private; no public demo at the moment.
              </span>
            ) : null}
          </Reveal>

        </div>

        {project.screenshot ? (
          <Reveal delay={0.25} className="container-page mt-14 md:mt-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-bg-elevated sm:aspect-[16/9]">
              <Image
                src={project.screenshot}
                alt={`Screenshot of ${project.name}`}
                fill
                priority
                sizes="(min-width: 768px) 1152px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        ) : null}
      </header>

      <div className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          <div className="space-y-14 md:col-span-7">
            {sections.map((s, i) =>
              project.caseStudy[s.key] ? (
                <Reveal key={s.key} delay={Math.min(i * 0.04, 0.16)}>
                  <h2 className="mb-3 text-2xl font-medium tracking-tight text-text">{s.label}</h2>
                  <p className="text-pretty leading-relaxed text-text-muted sm:text-[17px]">
                    {project.caseStudy[s.key]}
                  </p>
                </Reveal>
              ) : null
            )}

            <Reveal delay={0.2}>
              <h2 className="mb-3 text-2xl font-medium tracking-tight text-text">Current status</h2>
              <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-5 sm:flex-row">
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
                  What it does
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

      <section className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center md:py-16">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-text">
              Need something like this for your business?
            </h2>
            <p className="mt-2 text-text-muted">
              Tell me what you&apos;re working on and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} external icon={<ArrowUpRight size={15} />}>
              Send an email
            </Button>
            <Button href={site.whatsapp} external variant="secondary">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <nav aria-label="More projects" className="border-t border-border">
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
