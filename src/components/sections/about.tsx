import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { label: "Based in", value: "Nigeria" },
  { label: "Studying", value: "Computer Science" },
  { label: "Currently building", value: "vidnex" },
  { label: "Approach", value: "Brief first, then code" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SectionHeading index="02" eyebrow="About" title="A developer who ships, not just studies." />
          <Reveal delay={0.1} className="max-w-xl space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            <p>
              I&apos;m a computer science student in Nigeria who builds things
              to see if they work. Most of what&apos;s on this site started as
              a written brief before it was a line of code — a token model, a
              database schema, a product decisions log — because I&apos;d
              rather think through a system on paper than untangle it in
              production.
            </p>
            <p>
              That habit is why the work spans as much ground as it does: a
              real-time 3D customizer for a clothing brand, a Telegram bot
              that moves actual crypto, an offline AI that answers health
              questions in four Nigerian languages, and a creator-economy
              platform I&apos;m building right now with its own token ledger.
              Different domains, same instinct — figure out what the product
              actually needs, then build it properly.
            </p>
            <p>
              I&apos;m not chasing one industry. Give me a real problem — a
              storefront that needs to feel premium, a workflow that needs
              automating, an idea that needs a working prototype — and I can
              build it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-1 sm:border-none sm:pt-0">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-border pl-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-faint">
                  {f.label}
                </dt>
                <dd className="mt-1.5 text-base text-text">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
