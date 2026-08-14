import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "vidnex",
    name: "vidnex",
    tagline: "African creator economy, built on a single in-app token",
    summary:
      "The project getting most of my attention right now — a short-form video platform for African entertainment, with a fan-to-creator token economy designed milestone by milestone toward a seed-stage demo.",
    category: ["Blockchain / Web3", "Web Development"],
    status: "In Progress",
    year: "2026",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Drizzle ORM",
      "Neon Postgres",
      "Upstash Redis",
      "Auth.js v5",
      "PostHog",
    ],
    github: "https://github.com/Raz-01/vidnex",
    demo: "https://vidnex-chi.vercel.app",
    demoLabel: "Marketing site",
    featured: true,
    priority: 1,
    caseStudy: {
      idea: "A 'digital home' for African entertainment — one culturally concentrated scene to start (Afrobeats, Nigerian comedy), where short-form video is the entry point, creator-fan relationships are the reason to stay, and a single in-app token is how value moves. No asking anyone to abandon TikTok or Instagram first — creators fold their existing audience in.",
      problem:
        "Creators build real audiences on platforms that give fans no meaningful way to support them directly. Meanwhile most 'token' products in this space are either pure speculation or a bolt-on gimmick with no connection to actual engagement.",
      solution:
        "I'm building the full token experience — earning, spending, creator balances — around four concrete utilities (Support, Access, Boost, Membership), governed by strict non-speculative rules: users can earn but never withdraw, returns diminish everywhere value is created, and ordinary social interaction (watch, like, comment, follow) is always free. For the MVP the token runs on an internal ledger sitting behind a clean interface, so a real on-chain settlement layer can replace it later without a rewrite.",
      role: "Solo founder and builder — wrote the product brief and token model, architected the ledger (balanced double-entry transfers, idempotent writes, full audit trail), and I'm building it milestone by milestone (M0 → M4), deploying and demoing at each stage.",
      keyFeatures: [
        "Marketing site and creator waitlist live in production",
        "A fully modeled token ledger — every earn/spend/transfer is an auditable, idempotent database row, never a float",
        "Four spend utilities designed end-to-end: Support (tipping), Access (unlocks), Boost (bounded discovery spend), Membership (recurring fan-club)",
        "Human-gated, diminishing-returns earning designed to resist bot farming",
        "Milestone-based build (M0–M4), each one deployable and demoable on its own",
      ],
      challenges:
        "Designing a token economy that avoids the two failure modes common in this space — speculative 'get rich' mechanics, and pay-to-win discovery. The Boost utility explicitly caps spend and splits it between creator and treasury specifically to avoid a Steemit-style vote-buying dynamic, while staying honest that cash-out is simulated, not real, for now.",
      statusNote:
        "In Progress. M1 (marketing site + creator waitlist) is live; auth and the core token/feed milestones are in active development. On-chain settlement (Rust/Anchor/Solana) is an explicit, deferred design goal — not yet built.",
    },
  },
  {
    slug: "khk",
    name: "KHK",
    tagline: "A live 3D garment customizer for a Nigerian clothing brand",
    summary:
      "A mobile-first fashion e-commerce platform built around a real-time 3D customizer — customers design a top (neckline, sleeve, color, print) and watch it render before they order.",
    category: ["E-commerce", "Web Development"],
    status: "In Progress",
    year: "2026",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Three.js",
      "Zustand",
      "Supabase",
      "Prisma",
      "Vitest",
    ],
    demo: "https://khk-red.vercel.app",
    demoLabel: "Live demo",
    featured: true,
    priority: 2,
    caseStudy: {
      idea: "Give a clothing brand's customers a genuine 'build your own garment' experience — not a size dropdown, but something they can actually see take shape.",
      problem:
        "Custom and made-to-order clothing sites usually reduce customization to a handful of dropdowns with zero visual feedback. Customers commit to an order without ever seeing what they're actually getting.",
      solution:
        "I built a Custom Top Builder: a real-time 3D preview (garment mesh + print-plane rendering) driven by composable options — neck type, sleeve, fabric, color, print placement — with generated SVG path geometry, a live price breakdown that updates as choices change, and a shareable design link. It sits inside a full storefront: catalog, cart, checkout, auth, and an admin mode.",
      role: "Solo — built the customizer's geometry engine (SVG path generation, the 3D garment mesh, pricing rules, and product-matching logic that maps a custom design back to the nearest catalog product), plus the storefront shell around it.",
      keyFeatures: [
        "Real-time 3D garment customizer — neckline, sleeve, color, and print, rendered live via Three.js",
        "Generated SVG garment illustrations from the same path geometry, for fast previews",
        "Live price breakdown that recalculates as options change",
        "Shareable links so a customer's exact design can be sent or revisited",
        "Full storefront on mock data/localStorage — browsing, customizing, signing in, and checking out all work without a live backend",
      ],
      challenges:
        "Generating correct SVG garment paths from a small set of user choices (neckline × sleeve × fit) without hand-drawing every combination, and keeping the 3D preview, the 2D illustration, and the price calculation all in sync off one shared option state.",
      statusNote:
        "In Progress — Phase 1 of a planned 5-phase build. The customizer, catalog, and checkout flow work end-to-end on demo data; real payment (Paystack/Flutterwave) and production database wiring are the next phase.",
    },
  },
  {
    slug: "whitefield-hotel",
    name: "Whitefield Hotel",
    tagline: "A full-service luxury hotel platform, guest flow to admin dashboard",
    summary:
      "A concept hotel platform spanning room booking, restaurant reservations, gym and pool info, events, and a complete admin dashboard — not just a brochure site, but the operational machinery behind one.",
    category: ["Web Development", "Business Application"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Paystack",
      "Resend",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    featured: true,
    priority: 3,
    caseStudy: {
      idea: "Explore what a full-service luxury hotel's digital operations could actually look like as one system — guest-facing booking alongside the admin tools that run it, not two disconnected products.",
      problem:
        "Most hotel websites are static brochures. The operational reality — room availability, restaurant reservations, gym and pool scheduling, admin oversight — usually lives in separate, disconnected systems (or a phone call).",
      solution:
        "A single Next.js application covering the guest side (rooms, restaurant, gym, pool, events, gallery, booking flow) and the admin side (bookings, rooms, gym/pool/restaurant management, analytics, CMS, role-gated users), backed by Supabase for data and auth, Paystack for payment, and Resend for transactional email.",
      role: "Solo — designed the Supabase schema (rooms, bookings, admin roles), built the guest booking flow (room selection → guest details → payment → confirmation) and the restaurant reservation flow, and built the admin dashboard (analytics charts, CMS editing, booking/room/user management).",
      keyFeatures: [
        "Room browsing and booking flow with guest details and payment",
        "Restaurant table reservation with confirmation emails",
        "Gym, pool, and events information pages",
        "Admin dashboard: bookings, rooms, gym/pool/restaurant management, CSV export, revenue and booking analytics charts",
        "Role-gated admin access, and SEO groundwork (sitemap, robots, structured data, generated OG images)",
      ],
      challenges:
        "Wiring a booking flow that behaves correctly end-to-end — selection, guest details, payment, confirmation — while keeping every screen fully usable on demo/mock data before real payment credentials exist, and designing one admin data layer general enough to cover five different hotel domains without duplicating logic per section.",
      statusNote:
        "Prototype. Architecture, guest flows, and the admin dashboard are fully built; the app currently runs in a visible demo mode rather than a live production deployment with real payments.",
    },
  },
  {
    slug: "sports-etcetera",
    name: "Sports Etcetera",
    tagline: "An e-commerce concept for a Lagos sports retailer",
    summary:
      "A documented, properly-architected e-commerce build — product catalog, cart, and Paystack checkout — planned like a real product with a PRD, schema docs, and a roadmap before a line of UI was written.",
    category: ["E-commerce"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase Postgres",
      "Drizzle ORM",
      "Paystack",
      "Playwright",
    ],
    demo: "https://sports-etcetera.vercel.app",
    demoLabel: "Live demo",
    featured: true,
    priority: 4,
    caseStudy: {
      idea: "Give a local sports retail business a proper online storefront — browse by category and brand, manage inventory and shipping zones, and check out with a real Nigerian payment provider.",
      problem:
        "Small retail businesses often end up with either no online presence or a generic no-code storefront that doesn't fit their actual catalog (sizes, brands, per-variant stock) or local payment and shipping needs.",
      solution:
        "A Next.js storefront over a documented product/pricing/inventory/order domain — seeded categories, brands, and shipping zones, Paystack for payment — written up like a real product (PRD, schema docs, component hierarchy, roadmap) before being built.",
      role: "Solo — designed the data model and service layer (pricing, inventory, orders, audit) and built the storefront and checkout UI on top of it.",
      keyFeatures: [
        "Product catalog with categories, brands, and shipping zones",
        "Cart and Paystack checkout",
        "Service layer separating pricing, inventory, orders, and audit logic from UI",
        "Seed scripts for realistic demo data",
        "Unit tests (Vitest) and end-to-end tests (Playwright)",
      ],
      challenges:
        "Modeling inventory and shipping-zone pricing generically enough to support a real multi-category retailer, while keeping business logic cleanly separated from UI so it stays testable as the catalog grows.",
      statusNote:
        "Prototype — a working, documented storefront and checkout flow. Not confirmed as a live commercial deployment for the business it was designed around.",
    },
  },
  {
    slug: "mayor-wizzys-exchange",
    name: "Mayor Wizzy's Exchange",
    tagline: "A Telegram OTC crypto trading bot with an admin dashboard",
    summary:
      "A Telegram bot that walks customers through buying and selling USDT, BTC, and ETH, paired with an admin dashboard for rates, transactions, and payout automation — built as a reusable platform deployed per client.",
    category: ["Blockchain / Web3", "AI & Automation"],
    status: "In Progress",
    year: "2025 — 2026",
    stack: [
      "Grammy (Telegram)",
      "Fastify",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Tron",
      "Mono",
    ],
    featured: true,
    priority: 5,
    caseStudy: {
      idea: "Automate the manual, chat-based crypto OTC trading flow — customer messages an admin, negotiates a rate, sends payment, waits for a manual transfer — into a structured, guided Telegram bot.",
      problem:
        "Manual OTC crypto trading over chat is slow and error-prone on both sides: rates go stale mid-conversation, payment proof gets lost in DMs, and payouts are tracked by memory.",
      solution:
        "A Grammy-based Telegram bot with guided buy/sell conversations and admin-set exchange rates, backed by a Fastify API and a Postgres/Drizzle data layer, a Next.js admin dashboard for rates, transactions, and automation rules, and direct integrations with Mono (Nigerian bank account verification) and Tron (on-chain crypto transfers) to move toward automated payouts and deposit verification.",
      role: "Solo — built the bot conversations and admin notification flow, the shared database package, the admin dashboard (rates, transactions, automation history, analytics), and the Mono/Tron service integrations.",
      keyFeatures: [
        "Guided Telegram buy/sell conversations with live rate-setting",
        "Admin notifications and inline transaction-action keyboards inside Telegram",
        "Admin dashboard for rates, transactions, and automation history — every auto-send/auto-verify attempt logged, success or failure",
        "Mono integration for bank account verification",
        "Tron integration for on-chain crypto movement",
        "Multi-client architecture — a second deployment reuses the same platform for a different client by swapping environment variables, no code changes",
      ],
      challenges:
        "Coordinating shared state across three surfaces — the Telegram bot, the REST API, and the admin dashboard — through one database package without tight coupling, and building automation rules that are transparent about why an auto-send did or didn't happen, rather than a black box.",
      statusNote:
        "In Progress / Experimental. The bot, dashboard, and blockchain/banking integrations are functionally built and deployed per client; some announced capabilities are still evolving, so I'm labeling this honestly as in progress rather than finished.",
    },
  },
  {
    slug: "healthlit-ai",
    name: "HealthLit AI",
    tagline: "An offline, multilingual AI health-literacy assistant",
    summary:
      "My final-year project — a fully offline, multimodal AI application that answers health questions in plain language, grounded in WHO and Nigerian Ministry of Health documents, in English and four Nigerian languages.",
    category: ["AI & Automation"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Python",
      "Django REST Framework",
      "React + Vite",
      "LangChain",
      "ChromaDB",
      "Ollama (Phi-3, LLaVA)",
      "Whisper",
      "NLLB-200",
    ],
    github: "https://github.com/Raz-01/HealthLit-AI",
    featured: true,
    priority: 6,
    caseStudy: {
      idea: "Make trustworthy health information genuinely accessible in low-resource settings — no internet dependency, no English-only assumption, no opaque AI answers.",
      problem:
        "Health information online is usually dense clinical English, assumes constant connectivity, and isn't available in Yoruba, Hausa, Igbo, or Nigerian Pidgin — a real barrier in low-resource Nigerian settings.",
      solution:
        "A locally-run retrieval-augmented generation pipeline over a curated knowledge base of 12 WHO/FMOH health topics, answering text, voice, or image questions with a small local LLM, translated into the user's chosen language — with patient data never leaving the device.",
      role: "Solo — built the RAG pipeline (LangChain + ChromaDB retrieval over the WHO/FMOH knowledge base), the Django REST backend, the React frontend, and wired in speech, vision, and translation as input/output modalities around the core model.",
      keyFeatures: [
        "Accepts health questions via text, voice, or image",
        "Answers grounded in a curated 12-topic WHO/FMOH knowledge base — malaria, diabetes, hypertension, maternal health, and more",
        "Responds in English, Yoruba, Hausa, Igbo, and Nigerian Pidgin",
        "Runs entirely offline on a standard laptop, no internet required",
        "Patient data never leaves the device",
      ],
      challenges:
        "Getting a small local model (3.8B parameters, no cloud fallback) to answer reliably and stay grounded in the source documents instead of hallucinating, and chaining four separate models — language, translation, speech, vision — into one coherent offline pipeline without a GPU-backed server.",
      statusNote:
        "Prototype — a working application built and presented as a university seminar / final-year project (CSC 431, University of Ilorin, 2026). Not deployed as a public product.",
    },
  },
  {
    slug: "meliboard",
    name: "Meliboard",
    tagline: "An Android keyboard that rewrites your text with Gemini",
    summary:
      "A custom Android keyboard with one extra power: select any text you've typed, tap Enhance, and it's rewritten in place — Improve, Grammar, Formal, or Casual — by Gemini.",
    category: ["AI & Automation", "Mobile"],
    status: "Prototype",
    year: "2026",
    stack: ["Kotlin", "Android IME", "FastAPI", "Gemini API"],
    github: "https://github.com/Raz-01/Meliboard",
    featured: false,
    priority: 7,
    caseStudy: {
      idea: "Put AI text-enhancement directly into the keyboard layer, so it works inside any app — not locked into one chat product.",
      problem:
        "AI writing assistants are usually confined to a single app. There's no equivalent of 'fix this text' available wherever you happen to be typing.",
      solution:
        "A working Android IME — a full custom keyboard (QWERTY, shift/caps, symbols, standard editing) with one extra capability: select text, tap Enhance, and the keyboard sends it to a FastAPI backend, which calls Gemini and swaps in the rewritten result.",
      role: "Solo — built the Android keyboard service and settings UI in Kotlin, and the FastAPI backend that mediates the Gemini API call.",
      keyFeatures: [
        "Fully working custom keyboard — letters, shift/caps-lock, symbols, backspace with long-press repeat, enter",
        "Four rewrite modes (Improve, Grammar, Formal, Casual) selectable from a mode pill",
        "Reads the current text selection in any app and replaces it in place with the rewritten version",
        "Configurable backend URL and API token from a settings screen",
      ],
      challenges:
        "Working within Android's InputMethodService and text-selection APIs to reliably read and replace selected text across arbitrary third-party apps, not just a text field it controls.",
      statusNote:
        "Prototype — end-to-end working (keyboard → backend → Gemini → replaced text). Not published to the Play Store.",
    },
  },
  {
    slug: "firdaos-haven",
    name: "Firdaos Haven",
    tagline: "A premium fragrance e-commerce concept",
    summary:
      "A scroll-driven, editorial-feeling storefront concept for a fragrance and home-scent brand — self-documented as a production-quality prototype, not a finished commerce system.",
    category: ["E-commerce"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Neon Postgres",
      "Drizzle ORM",
      "Vercel Blob",
    ],
    demo: "https://firdaos-haven.vercel.app",
    demoLabel: "Live demo",
    featured: false,
    priority: 8,
    caseStudy: {
      idea: "Explore a polished, editorial storefront for a fragrance brand — the tactile, scroll-triggered e-commerce feel premium scent brands use — built as a reusable template.",
      problem:
        "Most small-brand e-commerce sites lean on generic templates that don't convey a sensory, premium product like fragrance.",
      solution:
        "A Next.js storefront with a scroll-driven hero (a mist-and-notes animation), a Postgres-backed product catalog with photo uploads via Vercel Blob, cart and wishlist state persisted client-side, and a single signed-in admin login for catalog management.",
      role: "Solo — built the storefront, the admin auth/session layer (signed cookies, hashed passwords), and the product data layer.",
      keyFeatures: [
        "Scroll-reveal, hover, and hero animations tuned for a fragrance brand",
        "Product catalog with image uploads via Vercel Blob",
        "Cart and wishlist with persisted state",
        "Single admin login for catalog management",
        "Documented known limitations rather than presented as payment-ready",
      ],
      challenges:
        "Getting the animation layer — scroll reveals, hover states, the hero mist effect — to feel premium rather than gimmicky, and building real admin auth (signed sessions, hashed passwords) for what's otherwise a template-style project.",
      statusNote:
        "Prototype — self-documented as a 'production-quality prototype, not a finished production system.' Not verified as processing real orders or payments.",
    },
  },
  {
    slug: "ceo-damola-jewels",
    name: "CEO Damola Jewels",
    tagline: "An independent jewelry storefront concept",
    summary:
      "A minimal jewelry e-commerce concept — catalog, cart, Paystack checkout, and WhatsApp order support — built around keeping the buying path as short as possible.",
    category: ["E-commerce"],
    status: "Concept",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Paystack", "Cloudinary"],
    demo: "https://ceo-damola-jewels.vercel.app",
    demoLabel: "Live demo",
    featured: false,
    priority: 9,
    caseStudy: {
      idea: "A minimal, elegant storefront for a jewelry brand where the purchase path stays short — browse, add to cart, pay — with WhatsApp as the fallback for anything a checkout form can't handle.",
      problem:
        "A small jewelry brand needs to sell online without the overhead of a full commerce platform, while still giving customers a direct, human line of contact.",
      solution:
        "A single-page storefront with category filtering, a cart drawer, and a checkout form that hands off to Paystack for payment, plus a WhatsApp number surfaced for direct customer contact; product images served via Cloudinary with an admin-editable product API.",
      role: "Solo — built the storefront UI, cart logic, Paystack initialize/verify integration, and the products/orders API routes.",
      keyFeatures: [
        "Category-filterable product catalog",
        "Cart with quantity controls",
        "Paystack-powered checkout with order confirmation",
        "WhatsApp contact link for direct sales support",
        "Simple admin/auth for product and order management",
      ],
      challenges:
        "Keeping the buying flow to as few steps as possible for a single-brand catalog without losing basic commerce essentials — stock checks, order confirmation, payment verification.",
      statusNote:
        "Concept — an independent project exploring a lightweight jewelry storefront, not built under a confirmed commercial engagement.",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.priority - b.priority);

export const allProjectsSorted = [...projects].sort(
  (a, b) => a.priority - b.priority
);
