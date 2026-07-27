
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

export function ClientLogos() {
  return (
    <section className="bg-white border-y border-line overflow-hidden">
      {/* Sits directly under the hero, one quiet qualifier line, no heading block */}
      <div className="container pt-8 pb-5">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Trusted by companies across North America since 2000
          </p>
        </Reveal>
      </div>

      {/* Marquee, duplicated track scrolls 50%, pauses on hover */}
      <Reveal delay={0.1} className="relative pb-8">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
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
