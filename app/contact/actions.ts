"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(1, "Please enter your company name."),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
  // honeypot
  website: z.string().max(0, "Spam detected.")
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialContactState: ContactFormState = { status: "idle" };

export async function submitContactForm(
  _: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone") ?? undefined,
    interest: formData.get("interest") ?? undefined,
    message: formData.get("message") ?? undefined,
    website: formData.get("website") ?? ""
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors
    };
  }

  console.info("Lead captured", parsed.data);

  return {
    status: "success",
    message: "Thanks — a senior advisor will be in touch within one business day."
  };
}
