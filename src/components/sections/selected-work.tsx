import { ArrowUpRight } from "lucide-react";
import { featuredProjects, allProjectsSorted } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Products I've actually shipped, in progress, and prototyped."
            description={`${allProjectsSorted.length} real builds across web, AI, blockchain, and e-commerce — led with the strongest and most complete first.`}
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/work" variant="secondary" icon={<ArrowUpRight size={15} />}>
              View all projects
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
