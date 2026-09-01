import { foundedYear, serviceCards, siteSettings } from "@/content/site-content";

/* JSON-LD. The site previously emitted none, so Google had no machine-readable
   record of who Vibrant is, where it operates, or what it sells. Rendered as a
   plain <script> so it ships with the static export and costs no client JS. */

const ORG_ID = `${siteSettings.siteUrl}/#organization`;

function Ld({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is our own constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization + physical location. Emitted once, from the root layout. */
export function OrganizationSchema() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: siteSettings.brandName,
        url: siteSettings.siteUrl,
        logo: `${siteSettings.siteUrl}/vibrant-logo-full.png`,
        image: `${siteSettings.siteUrl}/og-image.png`,
        description: siteSettings.defaultDescription,
        slogan: siteSettings.tagline,
        foundingDate: String(foundedYear),
        email: siteSettings.email,
        telephone: siteSettings.phonePrimary,
        address: {
          "@type": "PostalAddress",
          streetAddress: "5 Independence Way, Suite 300",
          addressLocality: "Princeton",
          addressRegion: "NJ",
          postalCode: "08540",
          addressCountry: "US"
        },
        geo: { "@type": "GeoCoordinates", latitude: 40.3406, longitude: -74.6216 },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "State", name: "New Jersey" },
          { "@type": "State", name: "New York" },
          { "@type": "State", name: "Pennsylvania" }
        ],
        sameAs: [
          siteSettings.social.linkedin,
          siteSettings.social.twitter,
          siteSettings.social.facebook
        ].filter(Boolean),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteSettings.phonePrimary,
            contactType: "sales",
            email: siteSettings.email,
            areaServed: "US",
            availableLanguage: "English"
          },
          {
            "@type": "ContactPoint",
            contactType: "human resources",
            email: siteSettings.emailCareers,
            areaServed: "US",
            availableLanguage: "English"
          }
        ],
        knowsAbout: [
          "SAP S/4HANA migration",
          "JD Edwards EnterpriseOne",
          "PeopleSoft",
          "Oracle E-Business Suite",
          "ERP modernization",
          "Cloud migration",
          "Cybersecurity",
          "Zero Trust architecture",
          "SOC 2 compliance",
          "HIPAA compliance",
          "Managed security services",
          "Data analytics",
          "AI readiness"
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: serviceCards
            .filter((s) => !s.hideFromGrid)
            .map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                url: `${siteSettings.siteUrl}/services/${s.slug}/`
              }
            }))
        }
      }}
    />
  );
}

/** Per-service Service schema, tied back to the organization by @id. */
export function ServiceSchema({
  name,
  description,
  slug
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType: name,
        url: `${siteSettings.siteUrl}/services/${slug}/`,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "United States" }
      }}
    />
  );
}

/** Breadcrumb trail. Pages already render crumbs visually; this exposes them. */
export function BreadcrumbSchema({
  items
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${siteSettings.siteUrl}${it.path}`
        }))
      }}
    />
  );
}
