export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Prototype"
  | "Experimental"
  | "Concept";

export type ProjectCategory =
  | "Business Software"
  | "Websites"
  | "Education"
  | "E-commerce"
  | "AI & Automation"
  | "Mobile"
  | "Blockchain / Web3";

export interface CaseStudy {
  idea: string;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  challenges: string;
  statusNote: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  year: string;
  stack: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  /** Real screenshot of the project, in /public/projects or Vercel Blob. Omit rather than fabricate one. */
  screenshot?: string;
  featured: boolean;
  priority: number;
  caseStudy: CaseStudy;
}
