"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { contactSchema, type ContactField, type ContactState } from "@/lib/contact-schema";

const MIN_FILL_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

const SUCCESS: ContactState = {
  status: "success",
  message: "Thanks, your message is on its way. I'll get back to you soon.",
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // 1. Honeypot: real users never see or fill this field.
  if (str(formData.get("website")) !== "") return SUCCESS;

  // 2. Fill-time check: set client-side on mount, so no-JS users simply skip it.
  const startedAt = Number(str(formData.get("startedAt")));
  if (startedAt && Date.now() - startedAt < MIN_FILL_MS) return SUCCESS;

  // 3. Rate limit per IP.
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages in a short time. Please try again in a few minutes.",
    };
  }

  // 4. Validate.
  const values = {
    name: str(formData.get("name")).trim(),
    email: str(formData.get("email")).trim(),
    message: str(formData.get("message")).trim(),
  };

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    const errors: Partial<Record<ContactField, string>> = {};
    (Object.keys(fieldErrors) as ContactField[]).forEach((key) => {
      const first = fieldErrors[key]?.[0];
      if (first) errors[key] = first;
    });
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  // 5. Send.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return {
      status: "error",
      message: "The form isn't configured yet. Please email me directly instead.",
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, message } = parsed.data;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again or email me directly.",
        values,
      };
    }

    return SUCCESS;
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email me directly.",
      values,
    };
  }
}