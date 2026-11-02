import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero, services } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="container-page relative">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-medium leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-text-muted md:mt-8 md:text-xl">
            {hero.intro}
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <Button href="/#work" icon={<ArrowRight size={15} />}>
            {hero.primaryCta}
          </Button>
          <Button href="/#contact" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6 sm:flex sm:flex-wrap sm:gap-x-10 md:mt-20">
            {services.map((s) => (
              <li
                key={s.title}
                className="flex items-center gap-2.5 text-sm text-text-muted"
              >
                <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {s.title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
