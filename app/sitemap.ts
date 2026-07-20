import type { MetadataRoute } from "next";
import { insights, resourceGuides, serviceCards, siteSettings } from "@/content/site-content";

export const dynamic = "force-static";

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
    "/social-responsibility"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteSettings.siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...serviceCards.map((service) => ({
      url: `${siteSettings.siteUrl}/services/${service.slug}`,
      lastModified: new Date()
    })),
    ...[...resourceGuides, ...insights].map((resource) => ({
      url: `${siteSettings.siteUrl}/resources/${resource.slug}`,
      lastModified: new Date()
    }))
  ];
}
