/**
 * Generates a bcrypt hash for the admin password.
 * Usage: npm run make-admin-hash -- "your-password-here"
 * Paste the printed hash into the ADMIN_PASSWORD_HASH env var (locally in
 * .env.local, and on Vercel under Project Settings -> Environment Variables).
 */
import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error('Usage: npm run make-admin-hash -- "your-password-here"');
  process.exit(1);
}

bcrypt.hash(password, 12).then((hash) => {
  console.log("\nADMIN_PASSWORD_HASH=" + hash + "\n");
});
