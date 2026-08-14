import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Nine real builds across web development, e-commerce, AI & automation, and blockchain/Web3 — each labeled honestly by status.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 md:pb-32">
      <div className="container-page">
        <Reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
          <span className="text-accent">Index</span>
          <span className="h-px w-8 bg-border-strong" aria-hidden />
          All work
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-2xl text-balance text-4xl font-medium tracking-tight text-text sm:text-5xl">
            Everything I&apos;ve built, labeled honestly.
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg text-text-muted">
            Live products, active builds, and prototypes — status shown
            plainly for each. No inflated claims, no dead links.
          </p>
        </Reveal>
      </div>

      <div className="container-page mt-16">
        <WorkGrid />
      </div>
    </div>
  );
}
