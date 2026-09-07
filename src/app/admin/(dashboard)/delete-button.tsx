"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProjectAction } from "../actions";

export function DeleteButton({ slug, name }: { slug: string; name: string }) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = () => {
    if (!confirm(`Delete "${name}"? This can't be undone.`)) return;
    startTransition(async () => {
      await deleteProjectAction(slug);
      router.refresh();
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={pending}
      className="font-mono text-xs uppercase tracking-wider text-text-faint hover:text-status-experimental disabled:opacity-50"
    >
      {pending ? "..." : "Delete"}
    </button>
  );
}
