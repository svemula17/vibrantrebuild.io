import type { Metadata } from "next";
import Link from "next/link";
import { siteSettings } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your request is in — a Vibrant specialist will call you within one business day.",
  robots: { index: false, follow: false }
};

const steps = [
  "We read your note and match you with the right specialist — ERP, cloud, security, data, or AI.",
  "That specialist reviews your situation so the first call is useful, not a triage exercise.",
  "You get a call within one business day. No handoffs, no account managers."
];

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <p className="eyebrow">Request received</p>
        <h1 className="mt-3">Thanks — your call is booked.</h1>
        <p className="mt-5 text-body-lg text-neutral-600">
          A Vibrant specialist will call you within one business day. Here&apos;s what
          happens next:
        </p>

        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-neutral-600 pt-1">{s}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-neutral-500">
          Need us sooner? Call{" "}
          <a href={`tel:${siteSettings.phonePrimary}`} className="font-semibold text-brand-700 hover:underline underline-offset-2">
            {siteSettings.phonePrimary}
          </a>{" "}
          during business hours (ET).
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources" className="btn-ghost">
            Browse our guides while you wait →
          </Link>
          <Link href="/" className="text-sm font-semibold text-brand-700 self-center hover:underline underline-offset-2">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
