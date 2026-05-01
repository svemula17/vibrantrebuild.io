import { CallbackForm } from "@/components/callback-form";
import { siteSettings } from "@/content/site-content";

export function CtaCallback() {
  return (
    <section className="section bg-navy-50/50">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Talk to Vibrant</p>
          <h2 className="mt-3">Get a call back from a senior advisor.</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Tell us a little about your goals — ERP modernization, cloud transformation, analytics, or
            managed support — and we&apos;ll set up a no-pressure call within one business day.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-sky">📞</span>
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
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-sky">✉</span>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Email</dt>
                <dd className="text-navy-700 font-medium">
                  <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg bg-sky/10 text-sky">📍</span>
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
