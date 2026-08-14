export const site = {
  name: "Ibrahim Abdulrahman",
  shortName: "Ibrahim",
  role: "Software & Product Developer",
  location: "Nigeria",
  email: "razza26raman@gmail.com",
  github: "https://github.com/Raz-01",
  linkedin: "https://www.linkedin.com/in/abdulrahaman-ibrahim-333357267/",
  x: "https://x.com/Raz_defi",
  xHandle: "@Raz_defi",
  whatsapp: "https://wa.me/2347085645209",
  whatsappDisplay: "+234 708 564 5209",
  url: "https://raz-portfolio.vercel.app",
};

export interface Capability {
  title: string;
  description: string;
  tags: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Full-Stack Product Development",
    description:
      "Taking a product from schema to shipped screen — data model, API routes, auth, payments, and the admin tooling that runs it, in one coherent codebase.",
    tags: ["Next.js", "TypeScript", "Postgres", "Drizzle / Prisma", "Auth"],
  },
  {
    title: "Frontend & Interaction Design",
    description:
      "Component-driven UIs with real motion design — scroll reveals, real-time 3D previews, animated state — built to stay fast, not just look good in a demo.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "AI & Automation",
    description:
      "RAG pipelines over real document sets, local LLMs with no cloud dependency, and chat-based automation — Telegram bots that move real transactions, not toy demos.",
    tags: ["LangChain", "ChromaDB", "Ollama", "Gemini API", "Grammy"],
  },
  {
    title: "Blockchain & Web3-Adjacent Systems",
    description:
      "Token-ledger design with real accounting discipline, on-chain integrations (Tron), and architecture that keeps a path open to full on-chain settlement.",
    tags: ["Token Ledgers", "Tron", "Solana (planned)"],
  },
  {
    title: "E-commerce & Payments",
    description:
      "Paystack-powered checkout across multiple storefronts, plus the inventory, pricing, and order logic underneath — not just a shopping cart UI.",
    tags: ["Paystack", "Cart & Checkout", "Inventory Logic"],
  },
  {
    title: "Product Thinking",
    description:
      "Most of these projects started as a written brief — a PRD, a decisions log, a token model — before a line of UI existed. I plan like a product person, then build like an engineer.",
    tags: ["Architecture", "Documentation", "Roadmapping"],
  },
];

export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Kotlin", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Zustand",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Django REST Framework", "Fastify", "FastAPI"],
  },
  {
    label: "Data",
    items: [
      "PostgreSQL",
      "Supabase",
      "Neon",
      "Drizzle ORM",
      "Prisma",
      "SQLite",
      "Redis",
    ],
  },
  {
    label: "AI / ML",
    items: ["LangChain", "ChromaDB", "Ollama", "Gemini API", "Whisper", "NLLB-200"],
  },
  {
    label: "Blockchain & Payments",
    items: ["Tron", "Paystack", "Mono"],
  },
  {
    label: "Tooling",
    items: ["Vercel", "Railway", "Docker", "Vitest", "Playwright", "Git"],
  },
];
