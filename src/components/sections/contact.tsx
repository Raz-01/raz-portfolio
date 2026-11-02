import { ArrowUpRight, Mail } from "lucide-react";
import { contact, site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: site.whatsapp,
    icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    value: site.name,
    href: site.linkedin,
    icon: LinkedinIcon,
  },
  { label: "GitHub", value: "Raz-01", href: site.github, icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={contact.title}
          description={contact.body}
          align="center"
          className="mb-10 md:mb-12"
        />

        <Reveal delay={0.05} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button href={`mailto:${site.email}`} external icon={<ArrowUpRight size={15} />}>
            Send an email
          </Button>
          <Button href={site.whatsapp} external variant="secondary">
            Message on WhatsApp
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 bg-surface p-6 transition-colors hover:bg-surface-hover"
              >
                <c.icon size={16} className="text-text-faint group-hover:text-accent-bright" />
                <div className="min-w-0">
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
