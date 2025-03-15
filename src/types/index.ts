export interface Social {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface About {
  title: string;
  description: string;
  image?: string;
}

export interface Skill {
  category: string;
  icon: JSX.Element;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Contact {
  headline: string;
  description: string;
  email: string;
  phone: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialId?: string;
  url?: string;
  icon?: JSX.Element;
}

export interface PortfolioData {
  name: string;
  title: string;
  heroDescription: string;
  socials: Social;
  about: About;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  certifications: Certification[];
  contact: Contact;
}