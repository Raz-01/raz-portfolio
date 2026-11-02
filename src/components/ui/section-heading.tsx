import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "mb-12 md:mb-16",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${className} ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
          centered ? "justify-center" : ""
        }`}
      >
        <span aria-hidden className="h-px w-6 bg-accent-border" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance text-3xl font-medium tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
