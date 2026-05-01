"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { initialContactState, submitContactForm } from "@/app/contact/actions";
import { interestOptions } from "@/content/site-content";

type Props = {
  heading?: string;
  showRequiredNote?: boolean;
};

export function CallbackForm({ heading, showRequiredNote }: Props) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactState);

  return (
    <motion.form
      action={formAction}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-card p-6 md:p-8 border border-line"
      noValidate
    >
      {heading && <h3 className="text-xl font-semibold text-navy-700">{heading}</h3>}
      {showRequiredNote && (
        <p className="mt-1 text-sm text-muted">
          Fields marked <span className="text-sky">*</span> are required.
        </p>
      )}

      <div className={`grid gap-4 sm:grid-cols-2 ${heading ? "mt-5" : ""}`}>
        <Field label="First name" name="firstName" autoComplete="given-name" required error={state.fieldErrors?.firstName?.[0]} />
        <Field label="Last name" name="lastName" autoComplete="family-name" required error={state.fieldErrors?.lastName?.[0]} />
        <Field label="Work email" name="email" type="email" autoComplete="email" required error={state.fieldErrors?.email?.[0]} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={state.fieldErrors?.phone?.[0]} />
      </div>

      <div className="mt-4">
        <Field label="Company" name="company" autoComplete="organization" required error={state.fieldErrors?.company?.[0]} />
      </div>

      <div className="mt-4">
        <label htmlFor="interest" className="block text-sm font-semibold text-navy-700 mb-1.5">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={interestOptions[0]}
          className="w-full rounded-lg border-line bg-white text-ink focus:border-sky focus:ring-sky"
        >
          {interestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1.5">
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A few sentences are perfect — we'll follow up with the right specialist."
          className="w-full rounded-lg border-line bg-white text-ink focus:border-sky focus:ring-sky"
        />
      </div>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" className="hidden" aria-hidden="true" />

      <div className="mt-6 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-xs text-muted">
          We&apos;ll respond within one business day. Your info is never shared.
        </p>
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-60">
          {pending ? "Sending..." : "Request a call back"}
        </button>
      </div>

      {state.status === "success" && (
        <p
          className="mt-4 rounded-lg border border-sky/30 bg-sky/10 px-4 py-3 text-sm text-navy-700"
          role="status"
        >
          {state.message}
        </p>
      )}
      {state.status === "error" && state.message && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-navy-700 mb-1.5">
        {label} {required && <span className="text-sky">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border-line bg-white text-ink focus:border-sky focus:ring-sky"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
