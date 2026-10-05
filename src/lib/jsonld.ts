import type { Graph } from "schema-dts";
import { siteConfig } from "@/lib/site";
import { knowsAbout, education, awards, projects } from "@/data";

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
        alumniOf: education.map((e) => ({
          "@type": "CollegeOrUniversity" as const,
          name: e.institution,
        })),
        award: awards.map((a) => `${a.title}, ${a.org}`),
        knowsAbout: [...knowsAbout],
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
      {
        "@type": "ItemList",
        "@id": `${url}/#projects`,
        name: `Projects by ${siteConfig.name}`,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem" as const,
          position: i + 1,
          item: {
            "@type": "CreativeWork" as const,
            name: p.title,
            description: p.summary,
            url: p.links?.live ?? `${url}/#${p.slug}`,
            keywords: p.stack.join(", "),
            author: { "@id": personId },
          },
        })),
      },
    ],
  };
}   