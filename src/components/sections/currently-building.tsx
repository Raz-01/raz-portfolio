import { ArrowUpRight, Globe } from "lucide-react";
import { getProject } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";

const milestones = [
  { id: "M0", label: "Foundation", done: true },
  { id: "M1", label: "Marketing site & waitlist", done: true, current: true },
  { id: "M2", label: "Video & media", done: false },
  { id: "M3", label: "Token economy live", done: false },
  { id: "M4", label: "Creator & fan dashboards", done: false },
];

const utilities = [
  { name: "Support", desc: "Tip or gift a creator directly" },
  { name: "Access", desc: "Unlock exclusive content or drops" },
  { name: "Boost", desc: "Bounded, diminishing-returns discovery spend" },
  { name: "Membership", desc: "Recurring fan-club subscription" },
];

export function CurrentlyBuilding() {
  const project = getProject("vidnex");
  if (!project) return null;

  return (
    <section className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="Currently building"
          title="vidnex — a creator economy for African entertainment."
          description="This is where most of my time is going right now: a short-form video platform with a single in-app token connecting fans and creators, built and demoed in public milestones."
        />

        <Reveal className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="border-b border-border p-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-live opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-status-live" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                  In progress · M1 live
                </span>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-text-muted">
                {project.caseStudy.idea}
              </p>

              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                  The four spend utilities
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {utilities.map((u) => (
                    <div key={u.name} className="rounded-xl border border-border p-4">
                      <p className="font-mono text-sm text-accent-bright">{u.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-text-muted">
                        {u.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/work/${project.slug}`} icon={<ArrowUpRight size={15} />}>
                  Read the case study
                </Button>
                {project.demo ? (
                  <Button href={project.demo} external variant="secondary" icon={<Globe size={14} />}>
                    Marketing site
                  </Button>
                ) : null}
                {project.github ? (
                  <Button href={project.github} external variant="ghost" icon={<GithubIcon size={14} />}>
                    Source
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="p-8 lg:col-span-2 lg:p-12">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-text-faint">
                Build roadmap
              </p>
              <ol className="space-y-0">
                {milestones.map((m, i) => (
                  <li key={m.id} className="relative flex gap-4 pb-7 last:pb-0">
                    {i !== milestones.length - 1 ? (
                      <span
                        aria-hidden
                        className="absolute left-[7px] top-4 h-full w-px"
                        style={{
                          background: m.done ? "var(--color-accent-border)" : "var(--color-border)",
                        }}
                      />
                    ) : null}
                    <span
                      className={`relative z-10 mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                        m.done
                          ? "border-accent bg-accent"
                          : "border-border-strong bg-bg"
                      }`}
                    />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-text-faint">
                        {m.id}
                        {m.current ? (
                          <span className="ml-2 rounded-full border border-accent-border px-2 py-0.5 text-accent-bright">
                            current
                          </span>
                        ) : null}
                      </p>
                      <p
                        className={`mt-1 text-sm ${m.done ? "text-text" : "text-text-faint"}`}
                      >
                        {m.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
