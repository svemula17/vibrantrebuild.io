import type { Metadata } from "next";
import { CallbackForm } from "@/components/callback-form";
import { PageHero } from "@/components/page-hero";
import { siteSettings } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a call back from a senior advisor — we'll respond within one business day."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you want to be in 12 months."
        description="We'll set up a no-pressure call with a senior advisor within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Talk to Vibrant</p>
            <h2 className="mt-3">Three ways to reach us.</h2>
            <p className="mt-5 text-muted">
              Whether you have a fully scoped project or just an idea — we&apos;ll match you with the right specialist.
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-sky shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">Call us</dt>
                  <dd className="mt-1 text-navy-700 font-medium">
                    <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-sky">{siteSettings.phonePrimary}</a>
                    <span className="text-muted"> · </span>
                    <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-sky">{siteSettings.phoneSecondary}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-sky shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">Email</dt>
                  <dd className="mt-1 text-navy-700 font-medium">
                    <a href={`mailto:${siteSettings.email}`} className="hover:text-sky">{siteSettings.email}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-sky shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">Headquarters</dt>
                  <dd className="mt-1 text-navy-700 font-medium">{siteSettings.address}</dd>
                </div>
              </div>
            </dl>

            {/* Stylized "map" placeholder */}
            <div
              className="relative mt-10 h-64 overflow-hidden rounded-2xl border border-line bg-navy-50"
              role="img"
              aria-label="Map showing Princeton, New Jersey"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(30,58,95,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative grid h-10 w-10 place-items-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sky opacity-30 animate-ping" />
                  <span className="relative grid h-5 w-5 place-items-center rounded-full bg-sky text-white">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  </span>
                </span>
              </div>
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-navy-700 shadow-sm">
                {siteSettings.address}
              </span>
            </div>
          </div>

          <CallbackForm heading="Get a call back" showRequiredNote />
        </div>
      </section>
    </>
  );
}
