export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Web & Cloud' | 'Full Stack';
  period: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  demoType: 'aurawatch' | 'tasnetworks' | 'prescription';
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'education' | 'employment' | 'leadership' | 'hackathon';
  shortSummary: string;
  bulletPoints: string[];
  skills: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Proficient';
    featured?: boolean;
    description?: string;
  }[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Competition' | 'Global Award' | 'Leadership' | 'Academic';
  description: string;
  icon: string;
}

export interface Stats {
  gpa: string;
  projectsCount: string;
  awardsCount: string;
  leadershipCount: string;
}
