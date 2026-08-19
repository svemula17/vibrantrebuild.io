import mbe from "@/assets/badges/nmsdc-mbe.png";
import corporatePlus from "@/assets/badges/nmsdc-corporate-plus.png";
import mccGrowth from "@/assets/badges/nmsdc-mcc-growth.png";
import ifcFund from "@/assets/badges/nmsdc-ifc-fund.png";

/* Single source for the NMSDC credentials, used by the homepage credential row
   and the Social Responsibility page. Kept in one place so the two can't drift,
   the way the footer's hand-copied social list once did.

   These are the digital badges, which carry no year, unlike the scanned 2024
   certificate they replaced. Nothing here needs touching on renewal. */
export const nmsdcBadges = [
  { src: mbe,           label: "Minority Business Enterprise", short: "MBE",            alt: "NMSDC Certified Minority Business Enterprise (MBE)" },
  { src: corporatePlus, label: "Corporate Plus® MBE",     short: "Corporate Plus®", alt: "NMSDC Certified Corporate Plus MBE" },
  { src: mccGrowth,     label: "MCC Growth Initiative",        short: "MCC Growth",     alt: "NMSDC Certified MCC Growth Initiative" },
  { src: ifcFund,       label: "IFC Investment Fund",          short: "IFC Fund",       alt: "NMSDC Certified IFC Investment Fund" }
] as const;
