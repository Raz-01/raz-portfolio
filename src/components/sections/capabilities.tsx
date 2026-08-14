import { capabilities } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Capabilities() {
  return (
    <section className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Capabilities"
          title="What I actually bring to a project."
          description="Grounded in what I've shipped — not a checklist of buzzwords."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={Math.min(i * 0.05, 0.25)} className="h-full">
              <div className="flex h-full flex-col bg-surface p-7 transition-colors duration-300 hover:bg-surface-hover">
                <span className="font-mono text-xs text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-text">{cap.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {cap.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
