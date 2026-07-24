import { CallbackForm } from "@/components/callback-form";
import { Reveal } from "@/components/reveal";
import { siteSettings } from "@/content/site-content";

const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.42 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.19a16 16 0 0 0 6.09 6.09l.91-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export function CtaCallback() {
  return (
    <section className="section bg-navy-50/50">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <p className="eyebrow">Talk to Vibrant</p>
            <h2 className="mt-3">Get a callback from a senior advisor.</h2>
            <p className="mt-5 text-muted leading-relaxed">
              Tell us a little about your goals — ERP modernization, cloud transformation, analytics, or
              managed support — and we&apos;ll set up a no-pressure call within one business day.
            </p>
          </Reveal>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-brand-700"><IconPhone /></span>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Call us</dt>
                <dd className="text-navy-700 font-medium">
                  <a href={`tel:${siteSettings.phonePrimary}`}>{siteSettings.phonePrimary}</a>
                  <span className="text-muted"> · </span>
                  <a href={`tel:${siteSettings.phoneSecondary}`}>{siteSettings.phoneSecondary}</a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-brand-700"><IconMail /></span>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Email</dt>
                <dd className="text-navy-700 font-medium">
                  <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-brand-700"><IconPin /></span>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Headquarters</dt>
                <dd className="text-navy-700 font-medium">{siteSettings.address}</dd>
              </div>
            </div>
          </dl>
        </div>

        <CallbackForm />
      </div>
    </section>
  );
}
