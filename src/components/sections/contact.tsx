import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", value: "Raz-01", href: site.github, icon: GithubIcon },
  {
    label: "LinkedIn",
    value: "Ibrahim Abdulrahman",
    href: site.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: site.whatsapp,
    icon: WhatsappIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Have an idea? Let's build it."
          align="center"
        />

        <Reveal delay={0.1} className="mx-auto max-w-md text-center">
          <p className="text-text-muted">
            Open to freelance work and collaborations across web, AI, and
            product builds. The fastest way to reach me is email or WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${site.email}`} external icon={<ArrowUpRight size={15} />}>
              Email me
            </Button>
            <Button href={site.whatsapp} external variant="secondary">
              WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 bg-surface p-6 transition-colors hover:bg-surface-hover"
              >
                <c.icon size={16} className="text-text-faint group-hover:text-accent-bright" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-faint">
                    {c.label}
                  </p>
                  <p className="mt-1 truncate text-sm text-text">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
