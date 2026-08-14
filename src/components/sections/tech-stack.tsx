import { techStack } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Tech stack"
          title="Tools I reach for, verified against real repos."
          description="Every item here has shipped in at least one project on this site — nothing listed just because it's trending."
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i * 0.05, 0.2)}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 border-l border-border pl-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
