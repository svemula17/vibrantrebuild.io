
import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/reveal";

/* Client & partner logos, fetched from each company's official website */
import ilink     from "@/clients/ilink-digital.svg";
import kanini    from "@/clients/kanini.svg";
import saicon    from "@/clients/saicon.svg";
import amphenol  from "@/clients/amphenol.svg";
import mouri     from "@/clients/mouri-tech.png";
import ascii     from "@/clients/ascii-group.png";
import radiant   from "@/clients/radiant-systems.png";
import reveille  from "@/clients/reveille-technologies.jpg";
import vsoft     from "@/clients/vsoft-consulting.webp";
import ezen      from "@/clients/ezen.svg";
import atr       from "@/clients/atr-international.png";
import infojini  from "@/clients/infojini.svg";
import interrait from "@/clients/interrait.png";
import amneal    from "@/clients/amneal.svg";
import enavate   from "@/clients/enavate.png";
import tenthRev  from "@/clients/tenth-revolution.png";
import teksys    from "@/clients/teksystems.svg";
import cec       from "@/clients/cec-experts.jpg";
import vaco      from "@/clients/vaco.svg";
import { nmsdcBadges } from "@/content/nmsdc";

type ClientLogo = {
  name: string;
  src: StaticImageData;
  /** white-on-transparent originals get flattened to a dark silhouette so they read on white */
  invert?: boolean;
};

const logos: ClientLogo[] = [
  { name: "iLink Digital",          src: ilink },
  { name: "KANINI",                 src: kanini },
  { name: "Saicon",                 src: saicon },
  { name: "Amphenol",               src: amphenol },
  { name: "MOURI Tech",             src: mouri },
  { name: "ASCII Group",            src: ascii },
  { name: "Radiant Systems",        src: radiant },
  { name: "Reveille Technologies",  src: reveille },
  { name: "V-Soft Consulting",      src: vsoft },
  { name: "eZen Inc",               src: ezen },
  { name: "ATR International",      src: atr },
  { name: "Infojini Consulting",    src: infojini },
  { name: "InterraIT",              src: interrait },
  { name: "Amneal",                 src: amneal },
  { name: "Enavate",                src: enavate },
  { name: "Tenth Revolution Group", src: tenthRev },
  { name: "TEKsystems",             src: teksys },
  { name: "The CEC Experts",        src: cec },
  { name: "Vaco",                   src: vaco }
];

function LogoItem({ logo }: { logo: ClientLogo }) {
  return (
    <div
      className="flex h-14 w-32 shrink-0 items-center justify-center px-1.5"
      title={logo.name}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        className={`max-h-11 w-auto max-w-[7.5rem] object-contain transition-all duration-300 ${
          logo.invert
            ? "brightness-0 opacity-55 hover:opacity-80"
            : "opacity-90 hover:opacity-100"
        }`}
      />
    </div>
  );
}

/* Homepage-only row above the marquee: the four things a buyer checks before
   they read anything else. */
const credentials = [
  { title: "Oracle & Microsoft Partner", note: "SAP and Oracle certified practice" },
  { title: "E-Verify Partner", note: "Princeton, NJ · Hyderabad, IN" },
  { title: "26+ years, one owner", note: "Founder-led since 2000" }
];

export function ClientLogos({
  tinted = false,
  credentials: showCredentials = false
}: { tinted?: boolean; credentials?: boolean } = {}) {
  const bg = tinted ? "#FDF6F2" : "#ffffff";
  return (
    <section className="border-y border-line overflow-hidden" style={{ backgroundColor: bg }}>
      {/* Sits directly under the hero, one quiet qualifier line, no heading block */}
      <div className={showCredentials ? "container pt-10 pb-5" : "container pt-8 pb-5"}>
        <Reveal>
          {showCredentials && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
              {/* All four NMSDC credentials, not just base MBE. Stacked rather
                  than inline so four badges fit the cell without shrinking. */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {nmsdcBadges.map((b) => (
                    <Image
                      key={b.short}
                      src={b.src}
                      alt={b.alt}
                      title={b.label}
                      width={120}
                      height={120}
                      className="h-14 w-auto object-contain shrink-0"
                    />
                  ))}
                </div>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-navy-700">NMSDC Certified MBE</span>
                  <span className="text-xs text-muted leading-snug">
                    Corporate Plus&#174; · MCC Growth · IFC Fund · counts toward supplier-diversity spend
                  </span>
                </span>
              </div>
              {credentials.map((c, i) => (
                <div
                  key={c.title}
                  className={
                    i === 1
                      ? "flex flex-col lg:border-l lg:border-line lg:pl-6"
                      : "flex flex-col sm:border-l sm:border-line sm:pl-6"
                  }
                >
                  <span className="text-sm font-semibold text-navy-700">{c.title}</span>
                  <span className="text-xs text-muted leading-snug">{c.note}</span>
                </div>
              ))}
            </div>
          )}
          <p
            className={`text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted${
              showCredentials ? " mt-9" : ""
            }`}
          >
            {showCredentials
              ? "A selection of the clients and delivery partners we've served since 2000"
              : "Trusted by companies across North America since 2000"}
          </p>
        </Reveal>
      </div>

      {/* Marquee, duplicated track scrolls 50%, pauses on hover */}
      <Reveal delay={0.1} className="relative pb-8">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bg}, transparent)` }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${bg}, transparent)` }}
        />
        <div className="flex w-max animate-marquee gap-6 px-6">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
