import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // Migrations need the direct (non-pooled) connection, per Neon's guidance.
    url: process.env.DATABASE_URL_UNPOOLED!,
  },
});
