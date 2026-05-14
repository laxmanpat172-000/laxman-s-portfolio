export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  imageUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  iconName: string;
  color: string;
  category: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = "dark" | "colorful";

export interface NavLink {
  label: string;
  href: string;
}
