import type { Graph } from "schema-dts";
import { siteConfig } from "@/lib/site";

export function buildJsonLd(): Graph {
  const { url } = siteConfig;
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;

  const sameAs = Object.values(siteConfig.links).filter(
    (link) => !link.includes("your-username"),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url,
        name: `${siteConfig.name} — Portfolio`,
        description: siteConfig.description,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        email: `mailto:${siteConfig.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: siteConfig.education.name,
        },
        knowsAbout: [...siteConfig.knowsAbout],
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}/#profile`,
        url,
        name: siteConfig.title,
        inLanguage: "en-IN",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        dateModified: new Date().toISOString(),
      },
    ],
  };
}