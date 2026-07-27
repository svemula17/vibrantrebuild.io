import type { Metadata } from "next";
import { siteSettings } from "@/content/site-content";

type PageMetaInput = {
  /** Bare page title — the root layout template appends " | Vibrant Inc" to <title>. */
  title: string;
  /** Meta description, target ≤160 chars. */
  description: string;
  /** Route path starting with "/", e.g. "/about" or "/services/sap-solutions". */
  path: string;
};

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteSettings.brandName} — ${siteSettings.tagline}`
};

/* Next merges metadata SHALLOWLY per key: a child's openGraph replaces the
   layout's entirely. So every page must emit a COMPLETE openGraph/twitter
   object — that's exactly what this helper guarantees. Relative canonical and
   og:url resolve against metadataBase (layout).
   NOTE: metadataBase is siteUrl without any basePath — correct for the custom
   domain; absorb a sub-path into siteSettings.siteUrl if that ever changes. */
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  // trailingSlash: true — the canonical must match the served URL form exactly.
  const canonical = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  // title.template only applies to <title>; social titles are composed manually.
  const socialTitle = `${title} | ${siteSettings.brandName}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: siteSettings.brandName,
      locale: "en_US",
      type: "website",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url]
    }
  };
}
