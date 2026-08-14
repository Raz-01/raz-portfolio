import { Reveal } from "./reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mb-14 md:mb-20 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-text-faint ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-border-strong" aria-hidden />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance text-3xl font-medium tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
