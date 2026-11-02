import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectSpotlight } from "@/components/project-spotlight";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

/**
 * Homepage work section. Layout follows the CMS priority order: the first
 * featured project gets the spotlight, the next two get wide cards, and the
 * rest fill a three-column grid. Nothing here is tied to a specific project.
 */
export async function SelectedWork() {
  const featured = await getFeaturedProjects();
  const [lead, ...rest] = featured;
  const wide = rest.slice(0, 2);
  const grid = rest.slice(2);

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems and websites built for real kinds of business."
            description="Business software, hotel and school websites, AI tools and online stores. Each project page explains the problem, what I built, and where it stands today."
            className="mb-0 md:mb-0"
          />
          <Reveal delay={0.05} className="shrink-0">
            <Button href="/work" variant="secondary" icon={<ArrowRight size={15} />}>
              All projects
            </Button>
          </Reveal>
        </div>

        {lead ? <ProjectSpotlight project={lead} /> : null}

        {wide.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {wide.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} size="wide" />
            ))}
          </div>
        ) : null}

        {grid.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grid.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
