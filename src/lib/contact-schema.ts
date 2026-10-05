import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long (80 characters max)."),
  email: z
    .email("Please enter a valid email address.")
    .max(120, "Email is too long."),
  message: z
    .string()
    .min(10, "Your message is a little short. A couple of sentences is plenty.")
    .max(2000, "Message is too long (2000 characters max)."),
});

export type ContactField = keyof z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Record<ContactField, string>;
};