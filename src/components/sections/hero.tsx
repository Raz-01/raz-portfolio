"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const domains = [
  "Web Development",
  "Software Engineering",
  "AI & Automation",
  "Blockchain / Web3",
  "E-commerce",
  "Product Development",
];

const headline = "I build digital products.";

export function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, black 40%, transparent 90%)",
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-live opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status-live" />
          </span>
          Available for freelance &amp; collaborations
        </motion.div>

        <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${word === "products." ? "text-accent" : ""}`}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-text-muted"
        >
          I work across web, software, AI, and emerging tech — turning ideas
          into working products, from real-time 3D commerce experiences to
          automated trading bots to offline AI. Nine real builds, one
          developer, no two projects the same.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/#work" icon={<ArrowUpRight size={15} />}>
            View my work
          </Button>
          <Button href="/#contact" variant="secondary">
            Let&apos;s work together
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative mt-16 border-t border-border py-5"
      >
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...domains, ...domains].map((d, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-text-faint"
              >
                {d}
                <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-faint md:flex"
      >
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
