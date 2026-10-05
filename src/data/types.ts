export type SkillGroup = {
  id: string;
  label: string;
  items: readonly string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** One line, used in list rows and meta descriptions. */
  summary: string;
  /** Full paragraph, used in the expanded view. */
  description: string;
  stack: readonly string[];
  highlights: readonly string[];
  /** Fill these in when you have public URLs. Sections hide the link if missing. */
  links?: { live?: string; repo?: string };
  featured?: boolean;
};

export type Experience = {
  role: string;
  org: string;
//   location: string;
  start: string;
  end: string;
  bullets: readonly string[];
};

export type Education = {
  institution: string;
//   location: string;
  degree: string;
  start: string;
  end: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export type Award = {
  title: string;
  org: string;
};