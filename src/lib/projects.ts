import type { Project } from "./types";

/**
 * Seed source for the projects table (`npm run db:seed`).
 *
 * The database is the live source of truth and is edited through /admin.
 * This file mirrors the content as of the November 2026 refresh so a fresh
 * database can be rebuilt from it. Re-running the seed overwrites any edits
 * made in the CMS for these slugs, so only run it deliberately.
 *
 * Ordering is controlled by `priority` (lower shows first). The first
 * featured project is shown as the large spotlight on the homepage.
 */
export const projects: Project[] = [
  {
    slug: "item7go-pos",
    name: "Item7Go POS",
    tagline:
      "A restaurant point-of-sale and operations system that keeps working when the internet doesn't",
    summary:
      "A point-of-sale and operations system built for Item7Go, a restaurant in Nigeria. Staff take orders, run the kitchen and take payment on a desktop app that works without internet, while the owner follows sales, products and payments from a web dashboard.",
    category: ["Business Software"],
    status: "In Progress",
    year: "2026",
    stack: [
      "Tauri",
      "React",
      "TypeScript",
      "SQLite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    screenshot: "/projects/item7go-pos.jpg",
    featured: true,
    priority: 1,
    caseStudy: {
      idea: "A complete system for running a restaurant counter: taking orders, sending them to the kitchen, taking payment, tracking stock and closing out shifts. It is built for Item7Go, a restaurant in Nigeria, and has three connected parts: a Windows desktop app the staff use, a cloud server, and a web dashboard the owner can open from anywhere.",
      problem:
        "Restaurants in Nigeria can't assume the internet will stay up through a busy service. A till that stops working when the connection drops can't be trusted at the counter. At the same time, an owner who isn't on site still needs to know what sold, how it was paid for, and whether the cash in the drawer adds up.",
      solution:
        "The desktop app records every order, payment and stock change in a database on the till itself, so the counter keeps running with no connection at all. Completed sales are queued and sent to the cloud automatically once the connection is back, and the owner sees them in the dashboard from a phone or laptop. A kitchen screen or second till in the same building can stay in sync over the restaurant's own network, without going through the internet. The system covers the whole day's operation (ordering, kitchen, payments, inventory, purchasing, staff and shifts), not just ringing up sales.",
      role: "Sole developer: gathered requirements with the restaurant owner, designed the architecture, and built the desktop app (Tauri, React, SQLite), the cloud API (Node.js, PostgreSQL), the sync between devices and the cloud, the manager dashboard, and the automated test suite.",
      keyFeatures: [
        "Fast order entry for dine-in, takeaway and delivery, with modifiers, notes, held orders and discounts",
        "Table management: seat guests, move an order to another table, or merge two bills",
        "Kitchen display that moves tickets from new to preparing to ready, and highlights orders that have waited too long",
        "Cash, bank transfer, card or split payments, with change calculation and printable receipts",
        "Recipe-based inventory: each sale deducts the ingredients it uses, with low-stock alerts, suppliers and purchase orders",
        "Five staff roles (Owner, Manager, Cashier, Waiter, Kitchen), each seeing only the screens they need, with an audit log for refunds, voids and large discounts",
        "Shift open and close, with expected cash calculated from actual sales so drawer shortfalls show up",
        "Works fully offline, then syncs to the cloud and to other devices on the same network",
        "Manager dashboard with sales, product and payment reports for any date range",
      ],
      challenges:
        "Keeping money and stock figures correct over an unreliable connection. Each sale and its upload record are written in the same database transaction, and every upload carries an ID the server checks before processing, so a retried request can never create a duplicate sale. Automated tests run the real desktop code against a real server to prove it. Money is stored in whole kobo rather than decimals, so rounding errors can't build up in totals. The system has 539 automated tests across the desktop app, cloud API and dashboard.",
      statusNote:
        "In progress. The desktop app, cloud API, local-network sync and manager dashboard are built and working, and the desktop app builds as a Windows installer. Still to do: an in-app settings screen (VAT and similar settings are currently changed in the database directly), one shared staff account list between the till and the cloud, and packaging the local-network sync host into the installer.",
    },
  },
  {
    slug: "whitefield-hotel",
    name: "Whitefield Hotel",
    tagline:
      "A hotel website where guests can book a room or reserve a table online",
    summary:
      "A website for a full-service hotel that presents its rooms, restaurant and facilities clearly and lets guests book directly, backed by an admin dashboard for managing bookings, rooms and content.",
    category: ["Websites", "Business Software"],
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
    demo: "https://white-field.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/whitefield-hotel.jpg",
    featured: true,
    priority: 2,
    caseStudy: {
      idea: "A hotel's website is often the first impression a guest gets. This project explores what a complete online presence for a full-service hotel looks like: a site that presents the rooms, restaurant, gym, pool and events well, and lets guests act on what they see by booking directly instead of calling.",
      problem:
        "Many hotel websites are static brochures. Guests can look at photos, but to check availability, book a room or reserve a table they still have to call or send a message, and the hotel ends up handling those requests across phone calls, chats and paper.",
      solution:
        "One website that covers both sides. Guests get pages for rooms, the restaurant, gym, pool, events and a gallery, plus a step-by-step booking flow and restaurant reservations with email confirmation. Hotel staff get an admin dashboard for bookings, rooms, gym, pool and restaurant management, booking and revenue charts, content editing, and role-based access. Supabase handles data and sign-in, Paystack handles payment, and Resend sends the confirmation emails.",
      role: "Solo: designed the database (rooms, bookings, admin roles), built the guest booking flow (room selection, guest details, payment, confirmation) and restaurant reservations, and built the admin dashboard (analytics charts, content editing, booking, room and user management).",
      keyFeatures: [
        "Room browsing and a guided booking flow with guest details and payment",
        "Restaurant table reservations with confirmation emails",
        "Dedicated pages for the restaurant, gym, pool, events and gallery",
        "Admin dashboard: bookings, rooms, gym, pool and restaurant management, CSV export, and revenue and booking charts",
        "Role-based staff access, plus search engine groundwork (sitemap, structured data, generated social preview images)",
      ],
      challenges:
        "Making the booking flow behave correctly from start to finish (selection, guest details, payment, confirmation) while keeping every screen usable on sample data before real payment credentials exist, and designing one admin data layer that covers five different parts of the hotel without repeating the same logic for each.",
      statusNote:
        "Prototype. A concept project, not built for a specific hotel. The guest pages and admin dashboard are deployed and work end to end in a visible demo mode on sample data; real payments are not switched on.",
    },
  },
  {
    slug: "greenfield-comprehensive-college",
    name: "Greenfield Comprehensive College",
    tagline:
      "A school website with admissions, a parent and student portal, result checking and fee payment",
    summary:
      "A complete website for a Nigerian secondary school: online admissions, a portal for students, parents and staff, a result checker and school fee payment. Built as a working demo for a fictional school and designed to be rebranded for a real one.",
    category: ["Education", "Websites"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "React Hook Form",
      "Zod",
      "Paystack",
    ],
    github: "https://github.com/Raz-01/greenfield-comprehensive-college",
    demo: "https://schoolng-wheat.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/greenfield-comprehensive-college.jpg",
    featured: true,
    priority: 3,
    caseStudy: {
      idea: "Show what a school website can do beyond a homepage: take admission applications, let parents check results and pay fees, and give students, parents and staff their own portal, all in one place.",
      problem:
        "Many Nigerian secondary schools have no real website, or only a static page with contact details. The things parents and students deal with every term (admissions, results, fees) are still handled on paper or in person.",
      solution:
        "One website covering both the public side (about, academics, staff, gallery, news, downloads) and the parts parents and students use day to day: an admissions form, a portal with separate views for students, parents and staff, a public result checker, and fee payment through Paystack. A full database design is included, ready for a real deployment.",
      role: "Solo: built the public pages, the admissions and contact forms with server-side validation, the portal login and dashboards for three roles, the result-checker logic, and the Paystack payment flow in test mode.",
      keyFeatures: [
        "Admissions form with validation on both the browser and server, generating an application ID",
        "Portal with separate dashboards for students, parents and staff, with demo logins for each",
        "Public result checker using the same lookup logic as the portal",
        "School fee payment through Paystack, in test mode",
        "Staff directory, class structure, gallery, news and downloads sections",
        "A complete PostgreSQL database design, documented and ready to connect",
      ],
      challenges:
        "Making every flow feel complete (server-side validation, realistic application IDs, role-based dashboards) while nothing is saved to a live database yet, and documenting clearly what is working versus simulated so the demo is never mistaken for a production system.",
      statusNote:
        "Prototype. A working demo for a fictional school, with no live database by design. The repository includes a guide for rebranding it and connecting it to a real database for an actual school.",
    },
  },
  {
    slug: "ilorin-bulk-mart",
    name: "Ilorin Bulk Mart",
    tagline:
      "A wholesale foodstuff store with bulk pricing, staff roles and accurate stock records",
    summary:
      "An online store for a bulk foodstuff business, with prices that drop at quantity thresholds, quote requests for large orders, separate admin tools for owners, sales staff and warehouse staff, and stock records that always add up.",
    category: ["E-commerce", "Business Software"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Auth.js v5",
      "Zustand",
      "Paystack",
    ],
    github: "https://github.com/Raz-01/ecom-storefront",
    demo: "https://ecom-storefront-kappa.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/ecom-storefront.jpg",
    featured: true,
    priority: 4,
    caseStudy: {
      idea: "Build a store that fits how a wholesale food business actually works: tiered bulk pricing, accurate inventory, and staff roles, rather than a generic shop template with a 'bulk' label on it.",
      problem:
        "Bulk and wholesale sellers need things a standard online store template doesn't handle well: unit prices that change at quantity thresholds, stock counts that stay correct across sales, returns and manual corrections, and staff roles (owner, sales, warehouse) that shouldn't all see or do the same things.",
      solution:
        "A storefront with tiered bulk pricing and a request-a-quote option above the largest tier, Paystack payment with a built-in demo payment fallback, and a role-based admin for owners, sales staff and warehouse staff covering products, orders, quotes and staff. Underneath, money is stored as whole numbers to avoid rounding errors, a single order status drives both the payment and delivery views so they can't disagree, and every stock change is recorded as its own entry so stock levels can always be traced back.",
      role: "Solo: designed the data model (currency handling, order states, inventory ledger) and built the storefront, checkout, quote-request flow, and the role-based admin dashboard with analytics.",
      keyFeatures: [
        "Tiered bulk pricing, with a request-a-quote option for orders above the largest tier",
        "Paystack checkout, with an in-app demo payment simulator when no live key is configured",
        "Role-based admin: owner, sales staff and warehouse staff each see different tools",
        "Every stock change recorded as its own entry, so stock history is always explainable",
        "One order status driving separate payment and fulfilment views that can never drift apart",
        "Delivery-fee preview by state, pickup or nationwide delivery, and a WhatsApp handoff after checkout and quote requests",
      ],
      challenges:
        "Modelling money and inventory so reports are always correct and can be rebuilt from history: whole-number currency instead of decimals, and a record of every stock movement instead of a single number that gets overwritten.",
      statusNote:
        "Prototype. Phase 1 of a documented three-phase plan. Ilorin Bulk Mart is a placeholder business name, not a client engagement.",
    },
  },
  {
    slug: "velora-motors",
    name: "Velora Motors",
    tagline:
      "A car dealership platform with a budget finder, financing calculator and sales CRM",
    summary:
      "A car dealership website that helps buyers find a car that fits their budget, estimate monthly payments and compare vehicles, with an admin dashboard for inventory, leads and sales analytics. Built around a placeholder brand that can be rebranded from one settings file.",
    category: ["Websites", "Business Software"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Auth.js",
      "Recharts",
    ],
    demo: "https://velora-motors-zeta.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/velora-motors.jpg",
    featured: true,
    priority: 5,
    caseStudy: {
      idea: "Build a car dealership platform that does more than list cars: help buyers work out which car fits their budget and situation, then connect them to a salesperson on WhatsApp when they're ready.",
      problem:
        "Dealership websites are usually a searchable list of cars and nothing else. Buyers are left to guess at financing, compare vehicles by hand, and call in for basic questions the website could have answered.",
      solution:
        "Searchable, filterable inventory with shareable links; a budget finder that clearly flags cars above a buyer's budget instead of hiding them; a financing calculator for monthly payments; a 'help me find a car' wizard; side-by-side comparison of up to four vehicles; and a WhatsApp-first contact flow with prefilled messages. Behind it is an admin dashboard for inventory, a lead pipeline, and analytics.",
      role: "Solo: built the inventory and search, the budget-matching and financing logic, the recommendation wizard, vehicle comparison, and the admin CRM and analytics dashboard.",
      keyFeatures: [
        "Inventory search, filtering and sorting with shareable, bookmarkable results",
        "Budget finder that matches cars to a stated budget and clearly labels anything over it",
        "Financing calculator for an estimated monthly payment",
        "Rule-based recommendation wizard, built so a smarter engine can replace it later",
        "Side-by-side comparison of up to four vehicles",
        "Admin dashboard: inventory management, a lead pipeline and analytics charts",
        "WhatsApp contact with prefilled messages, plus printable vehicle sheets and QR codes for the showroom",
      ],
      challenges:
        "Writing the recommendation and budget-matching logic as separate, testable pieces rather than tying them to the screens, and making the dealership's name, contact details, currency and opening hours change from one settings file instead of being scattered through the code.",
      statusNote:
        "Prototype. A fully working demo dealership with around 120 sample vehicles. Velora Motors is a placeholder brand, not a real dealership client.",
    },
  },
  {
    slug: "solar-nigeria",
    name: "Solar Nigeria",
    tagline:
      "A solar company website with a calculator that turns a list of appliances into a quote",
    summary:
      "A website for a solar installation company built around an interactive calculator: customers list their appliances and how long they need backup power, and get a recommended system size and price estimate before they ever make a call.",
    category: ["Websites", "Business Software"],
    status: "Prototype",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "NextAuth.js",
      "Zod",
      "Vitest",
    ],
    demo: "https://solar-nigeria-sigma.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/solar-nigeria.jpg",
    featured: true,
    priority: 6,
    caseStudy: {
      idea: "Replace the 'contact us for a quote' dead end on most solar company websites with a calculator: tell it which appliances you need to run and for how long, and get a preliminary system size and price.",
      problem:
        "Solar is a considered purchase, and most people don't know enough to ask for a meaningful quote. Websites that only say 'contact us' lose visitors who wanted a number first, not a phone call.",
      solution:
        "An interactive calculator that turns a customer's appliance list and backup needs into a recommended inverter, battery and panel size with a price range. The calculation logic is written independently of the website, so the same code gives the live preview in the browser and the final figure checked on the server before a quote is saved.",
      role: "Solo: designed and built the calculator and its tests, the admin dashboard for managing components and pricing, and the quote-request flow.",
      keyFeatures: [
        "Interactive calculator: appliances and backup time in, recommended system and price range out",
        "Calculation logic kept separate from the website and covered by its own tests",
        "Each quote request saves exactly what was calculated at the time, so later price changes can't alter past quotes",
        "Admin dashboard for managing components, pricing and content",
      ],
      challenges:
        "Keeping the calculator accurate and reusable by writing it as plain, framework-free code, and making sure at the database level that a saved quote can never be changed by a later price update.",
      statusNote:
        "Prototype. Marked as a demo on its own homepage. Solar Nigeria is a placeholder company; this explores what a quote calculator for a real installer would look like.",
    },
  },
  {
    slug: "mayor-wizzys-exchange",
    name: "Mayor Wizzy's Exchange",
    tagline:
      "A Telegram bot that automates crypto buy and sell orders, with an admin dashboard",
    summary:
      "A Telegram bot that guides customers through buying and selling USDT, BTC and ETH, with an admin dashboard for rates, transactions and payout automation. Built as one platform that can be deployed separately for each client.",
    category: ["AI & Automation", "Blockchain / Web3"],
    status: "In Progress",
    year: "2025–2026",
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
    demo: "https://wizzy-exchange-dashboard.vercel.app",
    demoLabel: "Admin dashboard",
    screenshot: "/projects/mayor-wizzys-exchange.jpg",
    featured: true,
    priority: 7,
    caseStudy: {
      idea: "Turn a manual, chat-based crypto trading process (customer messages an admin, agrees a rate, sends payment, waits for a transfer) into a guided Telegram bot.",
      problem:
        "Handling crypto trades by chat is slow and error-prone on both sides: rates go out of date mid-conversation, payment proof gets lost in messages, and payouts are tracked from memory.",
      solution:
        "A Telegram bot with guided buy and sell conversations at admin-set rates, backed by an API and database, an admin dashboard for rates, transactions and automation rules, and integrations with Mono (Nigerian bank account verification) and Tron (on-chain transfers) to automate payouts and deposit checks.",
      role: "Solo: built the bot conversations and admin notifications, the shared database package, the admin dashboard (rates, transactions, automation history, analytics), and the Mono and Tron integrations.",
      keyFeatures: [
        "Guided Telegram buy and sell conversations with live rates",
        "Admin notifications and one-tap transaction actions inside Telegram",
        "Admin dashboard for rates, transactions and automation history, with every automatic send or verification logged",
        "Mono integration for bank account verification",
        "Tron integration for on-chain transfers",
        "Multi-client setup: a second deployment serves a different client by changing configuration, with no code changes",
      ],
      challenges:
        "Keeping the Telegram bot, the API and the admin dashboard in step through one shared database without tying them too closely together, and making automation rules transparent about why an automatic payout did or didn't happen.",
      statusNote:
        "In progress. The bot, dashboard and banking and blockchain integrations are built and deployed for each client; some features are still being refined.",
    },
  },
  {
    slug: "healthlit-ai",
    name: "HealthLit AI",
    tagline:
      "An offline AI assistant that answers health questions in English and four Nigerian languages",
    summary:
      "My final-year project: an AI application that answers health questions in plain language, based on WHO and Nigerian Ministry of Health documents, in English, Yoruba, Hausa, Igbo and Pidgin. It runs entirely on a laptop with no internet.",
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
    screenshot: "/projects/healthlit-ai.jpg",
    featured: true,
    priority: 8,
    caseStudy: {
      idea: "Make trustworthy health information accessible in low-resource settings: no internet required, not limited to English, and answers grounded in recognised health sources.",
      problem:
        "Health information online is usually written in dense clinical English, assumes a constant connection, and is rarely available in Yoruba, Hausa, Igbo or Pidgin. In many Nigerian communities, that puts it out of reach.",
      solution:
        "An AI system that runs locally and searches a curated knowledge base of 12 WHO and Federal Ministry of Health topics before answering. Users can ask by text, voice or image, and get an answer in their chosen language. Patient data never leaves the device.",
      role: "Solo: built the retrieval pipeline over the health knowledge base, the Django backend, the React frontend, and connected speech, image and translation models around the core language model.",
      keyFeatures: [
        "Accepts questions by text, voice or image",
        "Answers grounded in a 12-topic WHO/FMOH knowledge base covering malaria, diabetes, hypertension, maternal health and more",
        "Responds in English, Yoruba, Hausa, Igbo and Nigerian Pidgin",
        "Runs entirely offline on a standard laptop",
        "Patient data never leaves the device",
      ],
      challenges:
        "Getting a small local model (3.8 billion parameters, no cloud fallback) to stay grounded in the source documents rather than making things up, and chaining four separate models (language, translation, speech, vision) into one offline pipeline without a GPU server.",
      statusNote:
        "Prototype. Built and presented as my final-year project (CSC 431, University of Ilorin, 2026). Not deployed as a public product.",
    },
  },
  {
    slug: "khk",
    name: "KHK",
    tagline:
      "A clothing store where customers design their own top and see it in 3D before ordering",
    summary:
      "A mobile-first fashion store built around a real-time 3D customiser: customers choose the neckline, sleeves, colour and print, and see the garment take shape before they order.",
    category: ["E-commerce"],
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
    screenshot: "/projects/khk.jpg",
    featured: true,
    priority: 9,
    caseStudy: {
      idea: "Give a clothing brand's customers a real 'design your own' experience, where they can see the garment change as they make choices, instead of picking from a few dropdowns.",
      problem:
        "Made-to-order clothing sites usually reduce customisation to a handful of dropdowns with no visual feedback. Customers commit to an order without seeing what they'll get.",
      solution:
        "A custom top builder with a real-time 3D preview, driven by options for neckline, sleeve, fabric, colour and print placement, with a live price breakdown and a shareable design link. It sits inside a full store with catalogue, cart, checkout, sign-in and an admin mode.",
      role: "Solo: built the customiser's geometry (garment outlines, the 3D model, pricing rules, and matching a custom design to the nearest catalogue product), plus the store around it.",
      keyFeatures: [
        "Real-time 3D garment preview for neckline, sleeve, colour and print",
        "2D garment illustrations generated from the same shapes, for fast previews",
        "Price breakdown that updates as options change",
        "Shareable links to a customer's exact design",
        "Full store on demo data: browsing, customising, signing in and checkout all work",
      ],
      challenges:
        "Generating correct garment shapes from a small set of choices (neckline, sleeve, fit) without drawing every combination by hand, and keeping the 3D preview, 2D illustration and price in sync from one shared set of options.",
      statusNote:
        "In progress. Phase 1 of a planned five-phase build. The customiser, catalogue and checkout work end to end on demo data; live payments (Paystack/Flutterwave) and the production database are next.",
    },
  },
  {
    slug: "vidnex",
    name: "vidnex",
    tagline:
      "A short-video platform for African entertainment with a built-in fan-to-creator token",
    summary:
      "A short-form video platform for African entertainment where fans support creators directly through a single in-app token. Built in milestones; the marketing site and creator waitlist are live.",
    category: ["Blockchain / Web3", "Websites"],
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
    screenshot: "/projects/vidnex.jpg",
    featured: false,
    priority: 10,
    caseStudy: {
      idea: "A home for African entertainment, starting with one focused scene (Afrobeats and Nigerian comedy), where short videos bring people in, creator-fan relationships keep them, and a single in-app token is how fans support creators. Creators bring their existing audience rather than leaving other platforms.",
      problem:
        "Creators build real audiences on platforms that give fans no meaningful way to support them directly. Most 'token' products in this space are either speculative or a gimmick with no link to actual engagement.",
      solution:
        "A token system (earning, spending, creator balances) built around four uses: Support, Access, Boost and Membership. Strict rules keep it non-speculative: users can earn but not withdraw, rewards diminish to discourage farming, and ordinary interactions (watching, liking, commenting, following) are always free. For now the token runs on an internal ledger designed so it can move on-chain later without a rewrite.",
      role: "Solo founder and developer: wrote the product brief and token model, designed the ledger (balanced double-entry transfers, safe retries, full audit trail), and am building it milestone by milestone.",
      keyFeatures: [
        "Marketing site and creator waitlist live",
        "Token ledger where every earn, spend and transfer is an auditable database record",
        "Four spending options designed end to end: Support (tips), Access (unlocks), Boost (capped promotion), Membership (fan clubs)",
        "Earning rules designed to resist bot farming",
        "Built in five milestones, each one deployable and demoable on its own",
      ],
      challenges:
        "Designing a token economy that avoids speculation and pay-to-win promotion. Boost spending is capped and split between creator and platform specifically to prevent vote-buying.",
      statusNote:
        "In progress. The marketing site and creator waitlist are live; sign-in, video and the token features are in development. Moving the token on-chain (Solana) is a later goal, not yet built.",
    },
  },
  {
    slug: "sports-etcetera",
    name: "Sports Etcetera",
    tagline: "An online store for a Lagos sports retailer, with Paystack checkout",
    summary:
      "An online store for a sports retailer (catalogue, cart and Paystack checkout), planned with a product brief, database design and roadmap before any screens were built.",
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
    screenshot: "/projects/sports-etcetera.jpg",
    featured: false,
    priority: 11,
    caseStudy: {
      idea: "Give a local sports retailer a proper online store: browse by category and brand, manage stock and delivery zones, and pay with a Nigerian payment provider.",
      problem:
        "Small retailers often have no online store, or a generic one that doesn't fit their catalogue (sizes, brands, stock per variant) or their local payment and delivery needs.",
      solution:
        "A storefront built on a documented product, pricing, inventory and order model, with categories, brands, delivery zones and Paystack payment, planned like a real product (brief, database design, component plan, roadmap) before it was built.",
      role: "Solo: designed the data model and business logic (pricing, inventory, orders, audit) and built the storefront and checkout on top of it.",
      keyFeatures: [
        "Product catalogue with categories, brands and delivery zones",
        "Cart and Paystack checkout",
        "Pricing, inventory, order and audit logic kept separate from the screens",
        "Realistic demo data",
        "Unit tests and end-to-end browser tests",
      ],
      challenges:
        "Modelling inventory and delivery-zone pricing flexibly enough for a multi-category retailer, while keeping business logic separate from the interface so it stays testable as the catalogue grows.",
      statusNote:
        "Prototype. A working storefront and checkout flow; not a live store for the business it was designed around.",
    },
  },
  {
    slug: "meliboard",
    name: "Meliboard",
    tagline: "An Android keyboard that rewrites your text with AI, in any app",
    summary:
      "A custom Android keyboard with one extra feature: select any text you've typed, tap Enhance, and it's rewritten in place (improved, corrected, more formal or more casual) using Google's Gemini.",
    category: ["AI & Automation", "Mobile"],
    status: "Prototype",
    year: "2026",
    stack: ["Kotlin", "Android IME", "FastAPI", "Gemini API"],
    github: "https://github.com/Raz-01/Meliboard",
    featured: false,
    priority: 12,
    caseStudy: {
      idea: "Put AI writing help into the keyboard itself, so it works in every app instead of inside one chat product.",
      problem:
        "AI writing assistants usually live inside a single app. There's no simple 'fix this text' available wherever you happen to be typing.",
      solution:
        "A working Android keyboard (letters, shift, symbols, standard editing) with one addition: select text, tap Enhance, and the keyboard sends it to a small backend that calls Gemini and replaces it with the rewritten version.",
      role: "Solo: built the Android keyboard and settings screen in Kotlin, and the FastAPI backend that calls Gemini.",
      keyFeatures: [
        "Fully working keyboard: letters, shift and caps lock, symbols, backspace with long-press repeat",
        "Four rewrite modes: Improve, Grammar, Formal and Casual",
        "Reads the selected text in any app and replaces it in place",
        "Configurable backend address and API token in settings",
      ],
      challenges:
        "Working within Android's keyboard and text-selection APIs to reliably read and replace selected text inside other apps, not just a text field the keyboard controls.",
      statusNote:
        "Prototype. Works end to end (keyboard, backend, Gemini, replaced text). Not published on the Play Store.",
    },
  },
  {
    slug: "firdaos-haven",
    name: "Firdaos Haven",
    tagline: "An online store concept for a premium fragrance brand",
    summary:
      "A storefront for a fragrance and home-scent brand, designed to feel premium through scroll-based storytelling, with a product catalogue, cart, wishlist and admin login.",
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
    screenshot: "/projects/firdaos-haven.jpg",
    featured: false,
    priority: 13,
    caseStudy: {
      idea: "A polished, editorial-style store for a fragrance brand, built as a reusable template.",
      problem:
        "Small brands often rely on generic store templates that don't convey a sensory, premium product like fragrance.",
      solution:
        "A storefront with a scroll-driven hero, a product catalogue stored in Postgres with photo uploads, a cart and wishlist that persist between visits, and an admin login for managing products.",
      role: "Solo: built the storefront, the admin sign-in (signed sessions, hashed passwords) and the product data layer.",
      keyFeatures: [
        "Scroll, hover and hero animations tuned for a fragrance brand",
        "Product catalogue with image uploads",
        "Cart and wishlist that persist between visits",
        "Admin login for catalogue management",
      ],
      challenges:
        "Making the animation feel premium rather than gimmicky, and adding proper admin security to what is otherwise a template project.",
      statusNote:
        "Prototype. Documented as a production-quality prototype rather than a finished store; not processing real orders or payments.",
    },
  },
  {
    slug: "ceo-damola-jewels",
    name: "CEO Damola Jewels",
    tagline: "A simple jewellery store with Paystack checkout and WhatsApp support",
    summary:
      "A minimal jewellery store (catalogue, cart, Paystack checkout and WhatsApp contact) built to keep the path from browsing to paying as short as possible.",
    category: ["E-commerce"],
    status: "Concept",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Paystack", "Cloudinary"],
    demo: "https://ceo-damola-jewels.vercel.app",
    demoLabel: "Live demo",
    screenshot: "/projects/ceo-damola-jewels.jpg",
    featured: false,
    priority: 14,
    caseStudy: {
      idea: "A clean storefront for a jewellery brand where buying takes as few steps as possible (browse, add to cart, pay), with WhatsApp for anything a checkout form can't handle.",
      problem:
        "A small jewellery brand needs to sell online without the overhead of a full commerce platform, while keeping a direct, personal line to customers.",
      solution:
        "A single-page store with category filtering, a cart drawer and Paystack checkout, plus a WhatsApp number for direct contact. Product images are served through Cloudinary, with an admin product API.",
      role: "Solo: built the storefront, cart, Paystack payment and verification, and the product and order API.",
      keyFeatures: [
        "Product catalogue filterable by category",
        "Cart with quantity controls",
        "Paystack checkout with order confirmation",
        "WhatsApp link for direct sales support",
        "Simple admin for products and orders",
      ],
      challenges:
        "Keeping the buying flow short for a single-brand catalogue without dropping essentials: stock checks, order confirmation and payment verification.",
      statusNote:
        "Concept. An independent project exploring a lightweight jewellery store, not built for a client.",
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
