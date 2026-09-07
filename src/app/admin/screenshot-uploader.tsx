"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { uploadScreenshot } from "./actions";

export function ScreenshotUploader({
  initialUrl,
}: {
  initialUrl?: string;
}) {
  const [url, setUrl] = useState(initialUrl ?? "");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      const result = await uploadScreenshot(formData);
      if (result.error) {
        setError(result.error);
      } else if (result.url) {
        setUrl(result.url);
      }
    });
  };

  return (
    <div>
      <input type="hidden" name="screenshot" value={url} />
      {url ? (
        <div className="relative mb-3 aspect-[16/10] w-full max-w-xs overflow-hidden rounded-lg border border-border">
          <Image src={url} alt="Screenshot preview" fill className="object-cover" />
        </div>
      ) : (
        <p className="mb-3 text-xs text-text-faint">
          No screenshot yet. Falls back to a generated mark on the site.
        </p>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={pending}
        className="block text-sm text-text-muted file:mr-3 file:rounded-full file:border file:border-border-strong file:bg-transparent file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-wider file:text-text"
      />
      {pending ? (
        <p className="mt-2 text-xs text-text-faint">Uploading...</p>
      ) : null}
      {error ? (
        <p className="mt-2 text-xs text-status-experimental">{error}</p>
      ) : null}
    </div>
  );
}
