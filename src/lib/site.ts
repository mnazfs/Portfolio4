export const siteConfig = {
  name: "V S Muhammed Naseef",
  shortName: "Naseef",
  jobTitle: "Software Engineer",
  description:
    "Software engineer from Idukki, Kerala building full-stack web, mobile, GIS and ML-powered applications with React, Next.js, Node.js and Python.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  location: { locality: "Idukki", region: "Kerala", country: "IN" },
  email: "mnaseef2k02@gmail.com",
  // TODO: replace with your real profile URLs (the PDF stripped the hyperlinks)
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },
} as const;

export type SiteConfig = typeof siteConfig;