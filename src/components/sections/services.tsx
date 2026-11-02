import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I build"
          title="Software shaped around how your business works."
          description="Whether you run a restaurant, a hotel, a school or a shop, the goal is the same: less manual work, fewer mistakes, and a clear view of what's happening."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.2)} className="h-full">
              <div className="flex h-full flex-col bg-surface p-7 md:p-9">
                <h3 className="text-xl font-medium text-text">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-text-muted">{s.description}</p>
                <p className="mt-6 text-sm text-text-faint">
                  <span className="mr-3 font-mono text-[11px] uppercase tracking-wider text-accent">
                    Examples
                  </span>
                  {s.examples}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
