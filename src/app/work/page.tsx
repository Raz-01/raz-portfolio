import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { Reveal } from "@/components/ui/reveal";
import { getAllProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Business software, hotel and school websites, AI tools and online stores, each with a clear explanation of the problem, what was built and its current status.",
};

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span aria-hidden className="h-px w-6 bg-accent-border" />
          All work
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-text sm:text-5xl">
            Projects
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-text-muted">
            Business systems, websites, AI tools and online stores. Each
            project is labelled with its current status, from live and in
            progress to prototypes and concepts, and its page explains what
            it does and how it was built.
          </p>
        </Reveal>
      </div>

      <div className="container-page mt-12 md:mt-16">
        <WorkGrid projects={projects} />
      </div>
    </div>
  );
}
