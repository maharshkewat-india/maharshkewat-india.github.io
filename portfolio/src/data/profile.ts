export interface Profile {
  name: string;
  title: string;
  linkedin: string;
  github: string;
  email: string;
  education: Education[];
  certifications: Certification[];
  skills: Skill[];
  projects: Project[];
  learningJourney: Learning[];
}

// Sample data
const profile: Profile = {
  name: 'Maharsh Kewat',
  title: 'Cybersecurity Enthusiast & SOC Operator',
  linkedin: 'https://linkedin.com/in/maharshkewat',
  github: 'https://github.com/maharshkewat',
  email: 'maharsh.kewat@example.com',

  education: [
    {
      institution: 'XYZ University',
      degree: 'Bachelor of Science in Computer Science',
      completionYear: 2022
    }
  ],

  certifications: [
    {
      name: 'Certified SOC Analyst (CSACE)',
      issuingBody: 'ISC2'
    }
  ],

  skills: [
    {
      name: 'Incident Response',
      proficiency: 'Advanced'
    }
  ],

  projects: [],
  learningJourney: []
};
export default profile