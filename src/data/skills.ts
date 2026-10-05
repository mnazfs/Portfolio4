import type { SkillGroup } from "./types";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "RESTful APIs",
      "CodeIgniter",
      "Bootstrap",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    id: "tools",
    label: "Design & Dev Tools",
    items: ["Figma", "Git", "GitHub", "VS Code", "Arduino IDE"],
  },
  {
    id: "core",
    label: "Core Competencies",
    items: ["Object-Oriented Programming", "Data Structures", "Full-Stack Development"],
  },
] as const;

export const softSkills = [
  "Communication",
  "Team collaboration",
  "Problem-solving",
  "Adaptability",
  "Time management",
] as const;

/** Short list for the hero marquee. */
export const marqueeItems = [
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Python",
  "PostgreSQL",
  "GIS",
  "Machine Learning",
  "IoT",
] as const;

/** Feeds JSON-LD `knowsAbout`. Keep it to things you'd happily be searched for. */
export const knowsAbout = [
  "Full-stack web development",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GIS and geospatial web applications",
  "Machine learning",
  "Embedded systems and IoT",
] as const;