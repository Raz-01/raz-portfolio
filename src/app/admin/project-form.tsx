"use client";

import { useActionState } from "react";
import { saveProject, type SaveState } from "./actions";
import { ALL_CATEGORIES, ALL_STATUSES } from "@/lib/data/constants";
import { ScreenshotUploader } from "./screenshot-uploader";
import type { Project } from "@/lib/types";

const initialState: SaveState = {};

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-text-faint">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-text-faint">{hint}</p> : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-border-strong bg-bg px-3 py-2 text-sm text-text outline-none focus:border-accent-border";

export function ProjectForm({
  project,
  isNew,
}: {
  project?: Project;
  isNew: boolean;
}) {
  const boundAction = saveProject.bind(null, isNew, project?.slug ?? null);
  const [state, formAction, pending] = useActionState(boundAction, initialState);

  return (
    <form action={formAction} className="max-w-3xl space-y-10">
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Basics
        </h2>

        <Field
          label="Slug"
          hint={
            isNew
              ? "Lowercase letters, numbers, hyphens only. Becomes /work/<slug>."
              : "Can't be changed after creation."
          }
        >
          <input
            name="slug"
            defaultValue={project?.slug}
            // readOnly, not disabled: disabled inputs are left out of the
            // submitted form, which made every edit fail slug validation.
            readOnly={!isNew}
            required
            pattern="[a-z0-9-]+"
            className={`${inputClass} ${!isNew ? "opacity-60" : ""}`}
          />
        </Field>

        <Field label="Name">
          <input
            name="name"
            defaultValue={project?.name}
            required
            className={inputClass}
          />
        </Field>

        <Field label="Tagline" hint="One line saying what it is and who it's for. Shown on every project card.">
          <input
            name="tagline"
            defaultValue={project?.tagline}
            required
            className={inputClass}
          />
        </Field>

        <Field
          label="Summary"
          hint="Two or three plain-language sentences. Shown on the homepage spotlight and in search previews."
        >
          <textarea
            name="summary"
            defaultValue={project?.summary}
            required
            rows={3}
            className={inputClass}
          />
        </Field>

        <Field label="Year">
          <input
            name="year"
            defaultValue={project?.year}
            required
            className={inputClass}
          />
        </Field>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Classification
        </h2>

        <Field label="Category (select all that apply)">
          <div className="flex flex-wrap gap-3">
            {ALL_CATEGORIES.map((c) => (
              <label key={c} className="flex items-center gap-2 text-sm text-text-muted">
                <input
                  type="checkbox"
                  name="category"
                  value={c}
                  defaultChecked={project?.category.includes(c)}
                />
                {c}
              </label>
            ))}
          </div>
        </Field>

        <Field label="Status">
          <select
            name="status"
            defaultValue={project?.status ?? "Concept"}
            className={inputClass}
          >
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tech stack" hint="Comma-separated, e.g. Next.js, TypeScript, Postgres">
          <input
            name="stack"
            defaultValue={project?.stack.join(", ")}
            required
            className={inputClass}
          />
        </Field>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            defaultChecked={project?.featured ?? true}
          />
          <label htmlFor="featured" className="text-sm text-text-muted">
            Featured on homepage
          </label>
        </div>

        <Field
          label="Priority"
          hint="Lower numbers show first, on the homepage and on /work. The featured project with the lowest number gets the large spotlight on the homepage; the next two get wide cards."
        >
          <input
            type="number"
            name="priority"
            defaultValue={project?.priority ?? 0}
            className={inputClass}
          />
        </Field>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Links & screenshot
        </h2>

        <Field label="GitHub URL" hint="Leave blank for private repos.">
          <input name="github" defaultValue={project?.github} className={inputClass} />
        </Field>

        <Field label="Live demo URL">
          <input name="demo" defaultValue={project?.demo} className={inputClass} />
        </Field>

        <Field label="Demo link label" hint='e.g. "Live demo", "Admin dashboard"'>
          <input
            name="demoLabel"
            defaultValue={project?.demoLabel}
            className={inputClass}
          />
        </Field>

        <Field label="Screenshot">
          <ScreenshotUploader initialUrl={project?.screenshot} />
        </Field>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Case study
        </h2>

        <Field label="Overview">
          <textarea
            name="csIdea"
            defaultValue={project?.caseStudy.idea}
            required
            rows={2}
            className={inputClass}
          />
        </Field>
        <Field label="The problem">
          <textarea
            name="csProblem"
            defaultValue={project?.caseStudy.problem}
            required
            rows={2}
            className={inputClass}
          />
        </Field>
        <Field label="What I built">
          <textarea
            name="csSolution"
            defaultValue={project?.caseStudy.solution}
            required
            rows={3}
            className={inputClass}
          />
        </Field>
        <Field label="My role">
          <textarea
            name="csRole"
            defaultValue={project?.caseStudy.role}
            required
            rows={2}
            className={inputClass}
          />
        </Field>
        <Field label="Key features" hint="One per line.">
          <textarea
            name="csKeyFeatures"
            defaultValue={project?.caseStudy.keyFeatures.join("\n")}
            required
            rows={5}
            className={inputClass}
          />
        </Field>
        <Field label="Technical challenges">
          <textarea
            name="csChallenges"
            defaultValue={project?.caseStudy.challenges}
            required
            rows={3}
            className={inputClass}
          />
        </Field>
        <Field label="Current status">
          <textarea
            name="csStatusNote"
            defaultValue={project?.caseStudy.statusNote}
            required
            rows={2}
            className={inputClass}
          />
        </Field>
      </section>

      {state.error ? (
        <p className="text-sm text-status-experimental">{state.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg hover:bg-accent-bright disabled:opacity-60"
      >
        {pending ? "Saving..." : isNew ? "Create project" : "Save changes"}
      </button>
    </form>
  );
}
