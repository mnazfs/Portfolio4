import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Nav } from "@/components/layout/nav";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
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
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}