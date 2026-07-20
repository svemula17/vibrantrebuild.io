import { siteSettings } from "@/content/site-content";

const links = [
  {
    label: "LinkedIn",
    href: siteSettings.social.linkedin,
    icon: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22H7.62V8z"
  },
  {
    label: "Facebook",
    href: siteSettings.social.facebook,
    icon: "M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2h-3c-3 0-4 1.8-4 4.3V10H7v4h3v8h3z"
  },
  {
    label: "X",
    href: siteSettings.social.twitter,
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zM17.083 19.77h1.833L7.084 4.126H5.117l11.966 15.644z"
  }
];

const validLinks = links.filter((s) => s.href && s.href.trim() !== "");

type Props = {
  /** "dark" = for dark footers (white icons), "light" = for light pages (navy icons) */
  variant?: "dark" | "light";
};

export function SocialLinks({ variant = "light" }: Props) {
  if (validLinks.length === 0) return null;

  const buttonClass =
    variant === "dark"
      ? "grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#C8401A] hover:border-[#C8401A] transition-all"
      : "grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy-700 shadow-card hover:bg-sky hover:border-sky hover:text-white hover:-translate-y-0.5 transition-all";

  return (
    <div className="flex gap-3">
      {validLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={`Vibrant Inc on ${s.label}`}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d={s.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
}
