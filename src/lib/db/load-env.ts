/**
 * Side-effect import: loads .env.local before any sibling module (like
 * client.ts) reads process.env. Must be the FIRST import in any script run
 * outside Next.js's own runtime (which loads .env.local automatically).
 */
import { config } from "dotenv";

config({ path: ".env.local" });
