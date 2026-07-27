import Image from "next/image";
import amphenol from "@/clients/amphenol.svg";
import teksystems from "@/clients/teksystems.svg";
import vaco from "@/clients/vaco.svg";
import radiant from "@/clients/radiant-systems.png";

const logos = [
  { src: amphenol, alt: "Amphenol" },
  { src: teksystems, alt: "TEKsystems" },
  { src: vaco, alt: "Vaco" },
  { src: radiant, alt: "Radiant Systems" }
];

type Props = {
  /** "full" = privacy + promise + client logos (forms); "compact" = privacy + promise only */
  variant?: "full" | "compact";
};

/* Trust signals belong at the point of decision, rendered directly beside
   every form/calculator submit, not buried in the footer. */
export function TrustCluster({ variant = "full" }: Props) {
  return (
    <div className={variant === "full" ? "mt-5 border-t border-neutral-200 pt-4" : "mt-4"}>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your info is never shared.
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          A specialist calls you within one business day.
        </span>
      </div>
      {variant === "full" && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Trusted by
          </span>
          {logos.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              height={20}
              width={60}
              className="h-5 w-auto object-contain grayscale opacity-60"
            />
          ))}
        </div>
      )}
    </div>
  );
}
