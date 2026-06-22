import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingCta } from "@/components/floating-cta";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteSettings } from "@/content/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: siteSettings.defaultTitle,
    template: `%s | ${siteSettings.brandName}`
  },
  description: siteSettings.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteSettings.defaultTitle,
    description: siteSettings.defaultDescription,
    url: siteSettings.siteUrl,
    siteName: siteSettings.brandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/vibrant-logo.png",
        width: 1024,
        height: 867,
        alt: "Vibrant Inc — Enterprise Technology Consulting"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.defaultTitle,
    description: siteSettings.defaultDescription,
    images: ["/vibrant-logo.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-navy-700 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
