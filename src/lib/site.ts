/**
 * Site-wide details and homepage copy, kept in one place so wording can be
 * changed without touching components. Project content lives in the
 * database and is edited through /admin.
 */
export const site = {
  name: "Ibrahim Abdulrahman",
  shortName: "Ibrahim",
  role: "Software Developer",
  location: "Nigeria",
  email: "razza26raman@gmail.com",
  github: "https://github.com/Raz-01",
  linkedin: "https://www.linkedin.com/in/abdulrahaman-ibrahim-333357267/",
  x: "https://x.com/Raz_defi",
  xHandle: "@Raz_defi",
  whatsapp: "https://wa.me/2347085645209",
  whatsappDisplay: "+234 708 564 5209",
  url: "https://raz.is-a.dev",
  description:
    "Software developer in Nigeria building business systems, websites and AI-powered tools: from an offline-first restaurant point of sale to hotel booking sites and school portals.",
};

export const hero = {
  eyebrow: "Software developer · Nigeria",
  headline: "Software that helps businesses run better.",
  intro:
    "I design and build business systems, websites and AI-powered tools for organisations in Nigeria. Practical software that fits how the business actually works, including when the internet doesn't.",
  primaryCta: "See my work",
  secondaryCta: "Start a project",
};

export interface Service {
  title: string;
  description: string;
  examples: string;
}

export const services: Service[] = [
  {
    title: "Business systems",
    description:
      "Point-of-sale, inventory, bookings, staff roles and reporting. Custom software built around how your business operates, with an admin dashboard so you can see what's happening.",
    examples: "Item7Go POS, Ilorin Bulk Mart",
  },
  {
    title: "Websites that do something",
    description:
      "Professional websites for hotels, schools and businesses that go beyond a brochure: online booking, admissions, quotes, payments and enquiries that land where you need them.",
    examples: "Whitefield Hotel, Greenfield College, Solar Nigeria",
  },
  {
    title: "AI and automation",
    description:
      "Tools that take repetitive work off your team, from chat bots that handle transactions to AI assistants grounded in your own documents, and automation that connects software to physical devices.",
    examples: "Mayor Wizzy's Exchange, HealthLit AI",
  },
  {
    title: "Online stores and payments",
    description:
      "Online stores with Paystack checkout, stock tracking, delivery options and WhatsApp handoff, built for how Nigerian customers actually buy.",
    examples: "KHK, Sports Etcetera",
  },
];

export const about = {
  title: "I build software for the problems businesses actually have.",
  paragraphs: [
    "I'm a software developer in Nigeria and a Computer Science graduate of the University of Ilorin. I build complete systems: the screens people use, the database underneath, the admin tools that run it, and the tests that keep it working.",
    "My most substantial work is Item7Go POS, a point-of-sale and operations system for a restaurant, built to keep working through internet outages without losing a sale. Most of my other projects follow the same pattern: a real kind of business, a specific problem, and software designed around how that business works.",
    "Before writing code, I write down what the system needs to do and how its data fits together. It's slower at the start and much faster after, and it's why I can take a project from an idea to something people rely on.",
  ],
  facts: [
    { label: "Based in", value: "Nigeria" },
    { label: "Education", value: "Computer Science, University of Ilorin" },
    { label: "Works on", value: "Business software, websites, AI tools" },
    { label: "Open to", value: "Freelance projects and collaborations" },
  ],
};

export interface TechGroup {
  label: string;
  items: string[];
}

/** Tools used across the projects on this site. */
export const techStack: TechGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Kotlin", "Rust", "SQL"],
  },
  {
    label: "Web and desktop",
    items: ["React", "Next.js", "Tauri", "Tailwind CSS"],
  },
  {
    label: "Backend and data",
    items: ["Node.js", "Django", "FastAPI", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    label: "AI and integrations",
    items: ["LangChain", "Ollama", "Gemini API", "Paystack", "Telegram bots"],
  },
];

export const contact = {
  title: "Have a problem software could solve?",
  body: "Tell me about your business and what's slowing it down. I'll tell you plainly whether software is the right fix, and what it would take to build. Email or WhatsApp is the fastest way to reach me.",
};
