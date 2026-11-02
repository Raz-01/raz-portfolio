import { about, techStack } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="container-page grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SectionHeading eyebrow="About" title={about.title} />
          <Reveal
            delay={0.05}
            className="max-w-xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="space-y-12 md:col-span-4 md:col-start-9">
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-1">
              {about.facts.map((f) => (
                <div key={f.label} className="border-l border-border pl-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-faint">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-base text-text">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-text-faint">
              Tools I work with
            </h3>
            <dl className="space-y-4">
              {techStack.map((g) => (
                <div key={g.label}>
                  <dt className="text-sm text-text">{g.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-muted">
                    {g.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
