"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import type { Office } from "@/content/site-content";

type Props = {
  offices: Office[];
  photos: Record<string, StaticImageData>;
};

/* Office photo by default; hovering (or tapping "Show map") cross-fades the
   live Google map into the same frame. The iframe only mounts once a card has
   been activated, so two maps never load on first paint. */
export function OfficeLocator({ offices, photos }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {offices.map((office) => {
        const showMap = active === office.id;
        const everActive = showMap || touched[office.id];

        return (
          <div key={office.id} className="card card-hover overflow-hidden">
            <div
              className="group relative h-56 w-full bg-neutral-100 md:h-64"
              onMouseEnter={() => setActive(office.id)}
              onMouseLeave={() => setActive((a) => (a === office.id ? null : a))}
              onFocus={() => setActive(office.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActive((a) => (a === office.id ? null : a));
                }
              }}
            >
              {/* Photo */}
              <Image
                src={photos[office.id]}
                alt={office.photoAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-opacity duration-500 ease-brand ${
                  showMap ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Map, mounted lazily on first activation */}
              {everActive && (
                <iframe
                  title={`Map of ${office.label}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapsQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ease-brand ${
                    showMap ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                />
              )}

              {/* Country pill */}
              <span
                className={`pointer-events-none absolute left-4 top-4 z-10 chip bg-white/95 text-navy-700 shadow-sm transition-opacity duration-300 ${
                  showMap ? "opacity-0" : "opacity-100"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {office.id === "us" ? "United States" : "India"}
              </span>

              {/* Touch/keyboard affordance — hover isn't available on phones */}
              <button
                type="button"
                onClick={() => setActive((a) => (a === office.id ? null : office.id))}
                onPointerDown={() => setTouched((t) => ({ ...t, [office.id]: true }))}
                aria-pressed={showMap}
                className="absolute bottom-4 right-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy-700 shadow-sm transition-colors hover:bg-white hover:text-brand-700"
              >
                {showMap ? "Show photo" : "Show map"}
              </button>
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
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-3"
              >
                View on Google Maps
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
