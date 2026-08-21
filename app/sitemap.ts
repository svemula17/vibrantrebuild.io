import type { MetadataRoute } from "next";
import { insights, resourceGuides, serviceCards, siteSettings } from "@/content/site-content";
import { industries } from "@/content/industries";

export const dynamic = "force-static";

/* Stable lastModified — bump on material content changes. A build-time
   new Date() makes every deploy look like a full-site update to crawlers. */
const LAST_UPDATED = new Date("2026-07-21");

const INSIGHT_DATES: Record<string, string> = {
  "five-signs-your-erp-is-costing-too-much": "2026-07-01",
  "genai-start-with-the-workflow": "2026-06-01",
  "zero-trust-is-a-roadmap": "2026-05-01",
  "clean-core-discipline": "2026-04-01"
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/team",
    "/resources",
    "/resources/sap-cost-calculator",
    "/partners",
    "/careers",
    "/contact",
    "/social-responsibility",
    "/industries",
    "/privacy",
    "/disclaimer"
  ];

  // trailingSlash: true — sitemap URLs must match the served form.
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteSettings.siteUrl}${route}/`,
      lastModified: LAST_UPDATED
    })),
    ...industries.map((ind) => ({
      url: `${siteSettings.siteUrl}/industries/${ind.slug}/`,
      lastModified: LAST_UPDATED
    })),
    ...serviceCards.map((service) => ({
      url: `${siteSettings.siteUrl}/services/${service.slug}/`,
      lastModified: LAST_UPDATED
    })),
    ...[...resourceGuides, ...insights].map((resource) => ({
      url: `${siteSettings.siteUrl}/resources/${resource.slug}/`,
      lastModified: new Date(INSIGHT_DATES[resource.slug] ?? LAST_UPDATED)
    }))
  ];
}
