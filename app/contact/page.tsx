import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image, { type StaticImageData } from "next/image";
import { CallbackForm } from "@/components/callback-form";
import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { offices, siteSettings } from "@/content/site-content";
import usOfficePhoto from "@/assets/offices/us-office.jpg";
import indiaOfficePhoto from "@/assets/offices/india-office.jpg";

const officePhotos: Record<string, StaticImageData> = {
  us: usOfficePhoto,
  india: indiaOfficePhoto
};

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Reach Vibrant Inc in Princeton, NJ or Hyderabad, India — get a call back from a senior advisor within one business day.",
  path: "/contact"
});

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
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-brand-700 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">Call us</dt>
                  <dd className="mt-1 text-navy-700 font-medium">
                    <a href={`tel:${siteSettings.phonePrimary}`} className="hover:text-brand-700">{siteSettings.phonePrimary}</a>
                    <span className="text-muted"> · </span>
                    <a href={`tel:${siteSettings.phoneSecondary}`} className="hover:text-brand-700">{siteSettings.phoneSecondary}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-brand-700 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">Email</dt>
                  <dd className="mt-1 text-navy-700 font-medium">
                    <a href={`mailto:${siteSettings.email}`} className="hover:text-brand-700">{siteSettings.email}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/10 text-brand-700 shrink-0">
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

            {/* Follow us */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Follow Vibrant</p>
              <div className="mt-3">
                <SocialLinks variant="light" />
              </div>
            </div>

            {/* Live map — keyless Google Maps embed */}
            <iframe
              title={`Map — ${siteSettings.address}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(offices[0].mapsQuery)}&output=embed`}
              className="mt-10 h-64 w-full rounded-2xl border border-line"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <CallbackForm heading="Book a Call" showRequiredNote />
        </div>
      </section>

      {/* Our offices */}
      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Where we are</p>
            <h2 className="mt-3">Two offices, one delivery model.</h2>
            <p className="mt-4 text-muted">
              Senior leadership in Princeton, engineering depth in Hyderabad — the follow-the-sun
              model that keeps costs sensible and quality high.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <div key={office.id} className="card overflow-hidden">
                <div className="relative h-44 w-full bg-navy-50">
                  <Image
                    src={officePhotos[office.id]}
                    alt={office.photoAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy-700 shadow-sm">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {office.id === "us" ? "United States" : "India"}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-lg text-navy-700">{office.label}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">{office.company}</p>
                  <address className="mt-4 not-italic text-sm leading-relaxed text-ink/75">
                    {office.addressLines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </address>
                  {office.phone && (
                    <p className="mt-3 text-sm">
                      <a href={`tel:${office.phone}`} className="font-medium text-navy-700 hover:text-brand-700">
                        {office.phone}
                      </a>
                    </p>
                  )}
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(office.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all"
                  >
                    View on Google Maps
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
