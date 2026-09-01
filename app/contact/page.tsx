import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { StaticImageData } from "next/image";
import { CallbackForm } from "@/components/callback-form";
import { PageHero } from "@/components/page-hero";
import { SocialLinks } from "@/components/social-links";
import { OfficeLocator } from "@/components/office-locator";
import { offices, siteSettings } from "@/content/site-content";
import usOfficePhoto from "@/assets/offices/us-office.jpg";
import indiaOfficePhoto from "@/assets/offices/india-office.jpg";

const officePhotos: Record<string, StaticImageData> = {
  us: usOfficePhoto,
  india: indiaOfficePhoto
};

export const metadata: Metadata = pageMeta({
  title: "Contact an ERP & Cybersecurity Consultant",
  description:
    "Reach Vibrant Inc in Princeton, NJ or Hyderabad, India, get a call back from a senior advisor within one business day.",
  path: "/contact"
});

export default function ContactPage() {
  const hasBooking = Boolean(siteSettings.bookingUrl?.trim());

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you want to be in 12 months."
        description="We'll set up a no-pressure call with a senior advisor within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {hasBooking && (
        <section className="section-soft">
          <div className="container">
            {/* Was a 700px inline Google scheduler iframe. It dominated the page
                and pushed the contact details and form below the fold, so the
                scheduler now opens in a new tab instead. */}
            <div className="card flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Book a call</p>
                <h2 className="mt-2 text-h4">Grab a time with a senior advisor.</h2>
                <p className="mt-2 text-sm text-muted">
                  Pick a slot that suits you and you&apos;ll get a calendar invite with a video link, no back-and-forth.
                </p>
              </div>
              <a
                href={siteSettings.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                See available times&nbsp;→
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="section-tint">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Talk to Vibrant</p>
            <h2 className="mt-3">Three ways to reach us.</h2>
            <p className="mt-5 text-muted">
              Whether you have a fully scoped project or just an idea, we&apos;ll match you with the right specialist.
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="icon-tile h-10 w-10">
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
                <span className="icon-tile h-10 w-10">
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
                <span className="icon-tile h-10 w-10">
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

          </div>

          <CallbackForm heading={hasBooking ? "Prefer a callback?" : "Book a Call"} showRequiredNote />
        </div>
      </section>

      {/* Our offices */}
      <section className="section-soft">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">Where we are</p>
            <h2 className="mt-3">Two offices, one delivery model.</h2>
            <p className="mt-4 text-muted">
              Senior leadership in Princeton, engineering depth in Hyderabad, the follow-the-sun
              model that keeps costs sensible and quality high.
            </p>
          </div>

          <OfficeLocator offices={offices} photos={officePhotos} />
        </div>
      </section>
    </>
  );
}
