"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "li";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  );
}
