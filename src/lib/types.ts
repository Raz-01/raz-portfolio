export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Prototype"
  | "Experimental"
  | "Concept";

export type ProjectCategory =
  | "Web Development"
  | "E-commerce"
  | "AI & Automation"
  | "Blockchain / Web3"
  | "Mobile"
  | "Business Application";

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
  featured: boolean;
  priority: number;
  caseStudy: CaseStudy;
}
