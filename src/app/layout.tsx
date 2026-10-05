import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { buildJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Nav } from "@/components/layout/nav";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.shortName} Portfolio`,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${siteConfig.name} — Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontDisplay.variable, fontSans.variable, fontMono.variable)}
    >
      <body className="grain relative min-h-screen">
        <a
          href="#main"
          className="bg-accent text-ink fixed top-3 left-3 z-[400] -translate-y-20 px-4 py-2 font-mono text-xs uppercase focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd data={buildJsonLd()} />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}