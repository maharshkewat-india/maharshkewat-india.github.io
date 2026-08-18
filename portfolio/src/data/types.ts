export interface Education {
  institution: string;
  degree: string;
  completionYear: number;
}

export interface Certification {
  name: string;
  issuingBody: string;
}

export interface Skill {
  name: string;
  proficiency: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Learning {
  title: string;
  provider: string;
}
