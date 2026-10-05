const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "V S Muhammed Naseef",
  shortName: "Naseef",
  jobTitle: "Software Engineer",
  title: "Muhammed Naseef | Full-Stack Software Engineer, Kerala",
  description:
    "Software engineer from Idukki, Kerala building full-stack web, mobile, GIS and ML-powered applications with React, Next.js, Node.js and Python.",
  url: rawUrl.replace(/\/$/, ""),
  locale: "en_IN",
  location: { locality: "Idukki", region: "Kerala", country: "IN" },
  email: "mnaseef2k02@gmail.com",
  // TODO: replace with your real profile URLs (the PDF stripped the hyperlinks)
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },
  keywords: [
    "Muhammed Naseef",
    "Naseef portfolio",
    "software engineer Kerala",
    "full-stack developer Idukki",
    "Next.js developer India",
    "React developer Kerala",
    "Node.js developer",
    "React Native developer",
    "GIS developer",
    "machine learning engineer",
    "freelance web developer Kerala",
  ],
} as const;

export type SiteConfig = typeof siteConfig;