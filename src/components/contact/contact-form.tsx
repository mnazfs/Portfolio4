"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact } from "@/app/actions/contact";
import type { ContactField, ContactState } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "bg-transparent border-b border-paper/30 py-3 text-lg text-paper placeholder:text-paper/30 transition-colors duration-300 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400";

function Field({
  name,
  label,
  error,
  children,
}: {
  name: ContactField;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-paper/50 font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        {label}
      </label>
      {children}
      <p
        id={`${name}-error`}
        className="min-h-4 font-mono text-[11px] tracking-[0.1em] text-red-400"
      >
        {error}
      </p>
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef<HTMLInputElement>(null);

  // Stamp the moment the form became interactive (used for the fill-time check).
  useEffect(() => {
    if (startedRef.current) startedRef.current.value = String(Date.now());
  }, []);

  // Move focus to the first invalid field after a failed submit.
  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const first = (["name", "email", "message"] as const).find((k) => state.errors?.[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }, [state]);

  const err = state.errors ?? {};

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-4">
      <Field name="name" label="Your name" error={err.name}>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Jane Doe"
          defaultValue={state.values?.name}
          aria-invalid={err.name ? true : undefined}
          aria-describedby={err.name ? "name-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field name="email" label="Email" error={err.email}>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          placeholder="jane@company.com"
          defaultValue={state.values?.email}
          aria-invalid={err.email ? true : undefined}
          aria-describedby={err.email ? "email-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field name="message" label="Message" error={err.message}>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          placeholder="Tell me a little about the role or project…"
          defaultValue={state.values?.message}
          aria-invalid={err.message ? true : undefined}
          aria-describedby={err.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y")}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="mt-2 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="bg-accent text-ink hover:bg-paper px-8 py-4 font-mono text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message →"}
        </button>

        <div role="status" aria-live="polite" className="min-h-5 text-sm">
          {state.status === "success" && (
            <p className="text-accent">{state.message}</p>
          )}
          {state.status === "error" && state.message && (
            <p className="text-red-400">{state.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}