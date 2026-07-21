import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteSettings } from "@/content/site-content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  axes: ["opsz"] // optical sizing: Inter Display cut at heading sizes
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.siteUrl),
  title: {
    default: siteSettings.defaultTitle,
    template: `%s | ${siteSettings.brandName}`
  },
  description: siteSettings.defaultDescription,
  openGraph: {
    title: siteSettings.defaultTitle,
    description: siteSettings.defaultDescription,
    url: siteSettings.siteUrl,
    siteName: siteSettings.brandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vibrant Inc — Optimizing your efficiency. Strengthening your bottom line."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.defaultTitle,
    description: siteSettings.defaultDescription,
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-neutral-900 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
