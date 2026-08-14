import type { ProjectStatus } from "@/lib/types";

const statusColor: Record<ProjectStatus, string> = {
  Live: "var(--color-status-live)",
  "In Progress": "var(--color-status-progress)",
  Prototype: "var(--color-status-prototype)",
  Experimental: "var(--color-status-experimental)",
  Concept: "var(--color-status-concept)",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const color = statusColor[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-text-muted"
      style={{ borderColor: "var(--color-border)" }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {status}
    </span>
  );
}
