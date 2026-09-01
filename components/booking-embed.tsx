import { siteSettings } from "@/content/site-content";

type Props = { className?: string; height?: number };

/* Inline Google Appointment Schedule. Reads siteSettings.bookingUrl, an empty
   URL renders nothing so callers can fall back to the callback form. Pure HTML
   iframe, no client script, so it works under static export. */
export function BookingEmbed({ className, height = 700 }: Props) {
  const url = siteSettings.bookingUrl?.trim();
  if (!url) return null;

  // Google serves the inline scheduler (not the standalone page) when gv=true
  // is present, append it if the pasted link doesn't already carry it.
  const src = /[?&]gv=true\b/.test(url)
    ? url
    : `${url}${url.includes("?") ? "&" : "?"}gv=true`;

  return (
    <div className={className}>
      <iframe
        src={src}
        title="Book a call with Vibrant"
        className="w-full rounded-2xl border border-line bg-white shadow-card"
        style={{ height }}
        loading="lazy"
      />
    </div>
  );
}
