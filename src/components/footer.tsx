import Link from "next/link";
import { site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "X", href: site.x },
  { label: "WhatsApp", href: site.whatsapp },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm text-text">{site.name}</p>
          <p className="mt-1 text-sm text-text-faint">
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-accent-bright"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-text-faint">
          <span>&copy; {new Date().getFullYear()}</span>
          <Link href="/#contact" className="hover:text-text-muted">
            Have an idea? Let&apos;s build it.
          </Link>
        </div>
      </div>
    </footer>
  );
}
