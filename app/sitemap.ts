import type { MetadataRoute } from "next";
import { serviceCards, siteSettings } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/partners", "/careers", "/contact", "/social-responsibility"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteSettings.siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...serviceCards.map((service) => ({
      url: `${siteSettings.siteUrl}/services/${service.slug}`,
      lastModified: new Date()
    }))
  ];
}
