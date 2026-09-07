"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-faint">
          Admin
        </p>
        <h1 className="mt-2 text-2xl font-medium text-text">Sign in</h1>

        <form action={formAction} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-text-faint"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-lg border border-border-strong bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent-border"
            />
          </div>

          {state.error ? (
            <p className="text-sm text-status-experimental">{state.error}</p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-bright disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
