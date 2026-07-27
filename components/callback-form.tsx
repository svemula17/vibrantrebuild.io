"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { interestOptions, siteSettings } from "@/content/site-content";
import { TrustCluster } from "@/components/trust-cluster";

type Status = "idle" | "submitting" | "error";
type FieldErrors = Partial<Record<string, string>>;

/* Only name, email, and phone block submission, on a callback form the phone
   number is the deliverable. Everything else is optional to cut friction. */
const RULES: Record<string, (v: string) => string | undefined> = {
  firstName: (v) => (!v.trim() ? "Please enter your first name." : undefined),
  lastName: (v) => (!v.trim() ? "Please enter your last name." : undefined),
  email: (v) =>
    !v.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? "Please enter a valid email address."
      : undefined,
  phone: (v) =>
    !v.trim() || !/^[+()\d\s.-]{7,}$/.test(v)
      ? "Please enter a phone number so we can call you back."
      : undefined
};
const FIELD_ORDER = ["firstName", "lastName", "email", "phone"];

type Props = { heading?: string; showRequiredNote?: boolean };

export function CallbackForm({ heading }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [interest, setInterest] = useState("");

  /* Preselect the interest from ?interest= (service pages + calculator link
     here with it). window.location instead of useSearchParams, the latter
     forces a Suspense boundary under static export. */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("interest");
    if (q && interestOptions.includes(q)) setInterest(q);
  }, []);

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const rule = RULES[name];
    if (!rule) return;
    setTouched((t) => ({ ...t, [name]: true }));
    setFieldErrors((f) => ({ ...f, [name]: rule(value) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot, if the hidden website field is filled, silently drop
    if (fd.get("website")) return;

    const data: Record<string, string> = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? "")
    };

    const errors: FieldErrors = {};
    for (const name of FIELD_ORDER) {
      const err = RULES[name](data[name]);
      if (err) errors[name] = err;
    }
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setTouched((t) => {
        const all = { ...t };
        FIELD_ORDER.forEach((n) => (all[n] = true));
        return all;
      });
      const firstInvalid = FIELD_ORDER.find((n) => errors[n]);
      if (firstInvalid) {
        setTimeout(() => document.getElementById(firstInvalid)?.focus(), 0);
      }
      return;
    }
    setFieldErrors({});
    setStatus("submitting");

    try {
      // Provider-agnostic submit: Formspree > Web3Forms > FormSubmit fallback.
      // Activate a provider by pasting its key into siteSettings.forms.
      const subject = `New callback request from ${data.firstName} ${data.lastName}${data.company ? `, ${data.company}` : ""}`;
      const { formspreeId, web3formsKey } = siteSettings.forms;

      let url: string;
      let body: Record<string, unknown>;
      if (formspreeId) {
        url = `https://formspree.io/f/${formspreeId}`;
        body = { ...data, _subject: subject };
      } else if (web3formsKey) {
        url = "https://api.web3forms.com/submit";
        body = { access_key: web3formsKey, subject, ...data };
      } else {
        // FormSubmit.co, free, no account, but silently drops submissions
        // until the one-time verification email is confirmed.
        url = "https://formsubmit.co/ajax/info@vibrantinc.com";
        body = { ...data, _subject: subject, _captcha: "false" };
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body)
      });

      if (res.ok) {
        router.push("/thank-you/");
      } else {
        throw new Error("server");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly at info@vibrantinc.com");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl shadow-card p-6 md:p-8 border border-line"
    >
      {heading && <h3 className="text-xl font-semibold text-navy-700">{heading}</h3>}
      <p className="mt-1 text-sm text-muted">
        Fields marked <span className="text-brand-700">*</span> are required.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 mt-5">
        <Field label="First name" name="firstName" autoComplete="given-name" required error={fieldErrors.firstName} valid={touched.firstName && !fieldErrors.firstName} onBlur={handleBlur} />
        <Field label="Last name" name="lastName" autoComplete="family-name" required error={fieldErrors.lastName} valid={touched.lastName && !fieldErrors.lastName} onBlur={handleBlur} />
        <Field label="Work email" name="email" type="email" autoComplete="email" required error={fieldErrors.email} valid={touched.email && !fieldErrors.email} onBlur={handleBlur} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required error={fieldErrors.phone} valid={touched.phone && !fieldErrors.phone} onBlur={handleBlur} />
      </div>

      <div className="mt-4">
        <Field label="Company (optional)" name="company" autoComplete="organization" />
      </div>

      <div className="mt-4">
        <label htmlFor="interest" className="block text-sm font-semibold text-navy-700 mb-1.5">
          Service area of interest (optional)
        </label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-lg border-line bg-white text-ink focus:border-sky focus:ring-sky"
        >
          <option value="">Select a service area…</option>
          {interestOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1.5">
          What are you trying to solve? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A few sentences are perfect, we'll follow up with the right specialist."
          className="w-full rounded-lg border-line bg-white text-ink focus:border-sky focus:ring-sky"
        />
      </div>

      {/* Honeypot, bots fill this, humans don't */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" className="hidden" aria-hidden="true" />

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Book a Call"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{message}</p>
      )}

      <TrustCluster />
    </form>
  );
}

function Field({
  label, name, type = "text", required, autoComplete, error, valid, onBlur
}: {
  label: string; name: string; type?: string;
  required?: boolean; autoComplete?: string; error?: string;
  valid?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-navy-700 mb-1.5">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <div className="relative">
        <input
          id={name} name={name} type={type}
          required={required} autoComplete={autoComplete}
          onBlur={onBlur}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full rounded-lg bg-white text-ink focus:border-sky focus:ring-sky ${
            error ? "border-red-400" : "border-line"
          }`}
        />
        {valid && (
          <svg
            viewBox="0 0 24 24"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-600"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      <p id={`${name}-error`} aria-live="polite" className="mt-1 text-xs text-red-600 min-h-[1rem]">
        {error ?? ""}
      </p>
    </div>
  );
}
