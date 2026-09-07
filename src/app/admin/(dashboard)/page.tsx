import Link from "next/link";
import { getAllProjects } from "@/lib/data/projects";
import { DeleteButton } from "./delete-button";

export default async function AdminDashboardPage() {
  const projects = await getAllProjects();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-text">Projects</h1>
          <p className="mt-1 text-sm text-text-muted">
            {projects.length} project{projects.length === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/admin/new"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg hover:bg-accent-bright"
        >
          + New project
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface text-text-faint">
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">
                Priority
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">
                Featured
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-mono text-text-faint">
                  {p.priority}
                </td>
                <td className="px-4 py-3 text-text">
                  <div>{p.name}</div>
                  <div className="text-xs text-text-faint">/{p.slug}</div>
                </td>
                <td className="px-4 py-3 text-text-muted">{p.status}</td>
                <td className="px-4 py-3 text-text-muted">
                  {p.featured ? "Yes" : "No"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/admin/${p.slug}/edit`}
                      className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent-bright"
                    >
                      Edit
                    </Link>
                    <DeleteButton slug={p.slug} name={p.name} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
