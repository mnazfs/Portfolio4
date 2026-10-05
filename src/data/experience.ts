import type { Award, Certification, Education, Experience } from "./types";

export const experience: readonly Experience[] = [
  {
    role: "Intern",
    org: "District Collectorate, Idukki",
    location: "Idukki, Kerala",
    start: "May 2025",
    end: "May 2025",
    bullets: [
      "Collected and structured three years of data on skill development programs across Idukki district into a database, and built a backend and frontend system for efficient retrieval that supports district-wise employment planning.",
      "Analysed the consolidated data to identify low-placement sectors and skill gaps across the district.",
    ],
  },
] as const;

export const education: readonly Education[] = [
  {
    institution: "Government Engineering College, Idukki",
    location: "Idukki, Kerala",
    degree: "B.Tech in Computer Science & Engineering",
    start: "2022",
    end: "2026",
  },
] as const;

export const certifications: readonly Certification[] = [
  { title: "Programming, Data Structures and Algorithms using Python", issuer: "IIT Madras" },
  { title: "Introduction to Machine Learning", issuer: "IIT Madras" },
  { title: "Deep Learning", issuer: "IIT Kharagpur" },
  { title: "Introduction to Internet of Things", issuer: "IIT Kharagpur" },
] as const;

export const awards: readonly Award[] = [
  {
    title: "First Runner Up Team, LEAP Project",
    org: "IIT Madras Incubation Cell",
  },
] as const;

export const languages = ["English", "Malayalam"] as const;

export const gate = { year: 2026, score: 453 } as const;