export interface Education {
  degree: string;
  university: string;
  years: number;
  field_of_study: string;
}



export interface Certification {
  name: string;
  issuer: string;
  date: string;
  details?: string;
}


export interface Skill {
  name: string;
  type: 'tool' | 'framework' | 'vulnerability' | 'programming' | 'procedure';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'native';
}


export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
}

// Common types used in portfolio
export interface DateRange {
  from: number;
  to: number;
}

export interface Location {
  city: string;
  state?: string;
  country: string;
}

export type SectionData = Education | Certification | Skill | Project;
