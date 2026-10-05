import { siteConfig } from "@/lib/site";
import { projects } from "./projects";
import { certifications, gate } from "./experience";

export const profile = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  role: siteConfig.jobTitle,
  location: `${siteConfig.location.locality}, ${siteConfig.location.region}`,

  hero: {
    eyebrow: "Software Engineer — Idukki, Kerala",
    intro:
      "I build full-stack web and mobile products, and I'm just as happy down at the map layer, the machine learning pipeline or the sensor board when the problem calls for it.",
    // Edit freely. Shown as a small status line in the hero.
    availability: "Open to full-stack roles",
  },

  about: {
    /** Drives the scroll-linked word-by-word reveal in Phase 5. Keep it to one or two sentences. */
    statement:
      "I like products that work end to end: a clean interface, a solid API, a well-modelled database, and the right data underneath. I learn new tools quickly, and I care more about shipping something dependable than something clever.",
    paragraphs: [
      "I'm a Computer Science and Engineering graduate from Government Engineering College, Idukki, with a foundation in software development and modern programming practice. My work spans React and Next.js frontends, Node.js backends, React Native apps, geospatial systems and machine learning, built through freelance projects and academic work.",
      "I enjoy collaborating in teams and picking up unfamiliar frameworks fast. Alongside web projects, I've worked on embedded systems with ESP32 microcontrollers, including a smart wheelchair that placed as First Runner Up in IIT Madras Incubation Cell's LEAP programme.",
    ],
  },

  contact: {
    heading: "Have a project or a role in mind?",
    blurb:
      "I'm happy to talk about full-stack roles, freelance builds or anything in between. Send a message and I'll get back to you.",
    email: siteConfig.email,
  },

  /** Derived from the other data files so they can't drift. */
  stats: [
    { value: String(projects.length), label: "Projects built" },
    { value: String(certifications.length), label: "Certifications" },
    { value: String(gate.score), label: `GATE ${gate.year} score` },
    { value: "2026", label: "B.Tech, CSE" },
  ],
} as const;