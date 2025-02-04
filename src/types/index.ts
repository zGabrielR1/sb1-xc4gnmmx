export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}