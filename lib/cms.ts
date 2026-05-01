import {
  companyFacts,
  navigationItems,
  partners,
  proofPoints,
  serviceCards,
  siteSettings,
  testimonials
} from "@/content/site-content";

export type CMSCollections =
  | "pages"
  | "services"
  | "site_settings"
  | "partners"
  | "testimonials"
  | "proof_points";

export async function getCMSCollection<T>(collection: CMSCollections): Promise<T> {
  const localContent = {
    pages: navigationItems,
    services: serviceCards,
    site_settings: siteSettings,
    partners,
    testimonials,
    proof_points: [...proofPoints, ...companyFacts]
  };

  return localContent[collection] as T;
}
