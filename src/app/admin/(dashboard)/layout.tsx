import { redirect } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth/session";
import { logout } from "../actions";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/admin" className="font-mono text-sm text-text">
            Admin<span className="text-accent">.</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="font-mono text-xs uppercase tracking-wider text-text-faint hover:text-text"
            >
              View site
            </Link>
            <form action={logout}>
              <button
                type="submit"
                className="font-mono text-xs uppercase tracking-wider text-text-faint hover:text-text"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="container-page py-10">{children}</main>
    </div>
  );
}
