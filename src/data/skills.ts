export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillEvidenceItem {
  skill: string;
  level: string;
  evidence: Array<{ label: string; link: string }>;
}

// This is placeholder data. Replace with your actual skills.
export const skillCategories: SkillCategory[] = [
  {
    name: 'Industry Knowledge',
    skills: [
      'Cybersecurity',
      'Information Security',
      'Cloud Security',
      'Network Security',
      'Incident Response',
      'Risk Assessment',
      'Vulnerability Assessment',
      'Digital Transformation',
      'Financial Governance',
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: ['Python', 'Linux', 'Tableau', 'Excel', 'Wireshark', 'Nmap', 'Splunk (learning)', 'Wazuh (learning)'],
  },
  {
    name: 'Interpersonal Skills',
    skills: ['Communication', 'Critical Thinking', 'Problem Solving', 'Analytical Skills', 'Team Building', 'Project Planning', 'Solution Architecture'],
  },
  {
    name: 'Other Skills',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing (NLP)', 'Artificial Intelligence (AI)', 'Data Analysis', 'Data Visualization', 'Algorithm Development', 'Statistics'],
  },
];

export const skillEvidence: SkillEvidenceItem[] = [
  {
    skill: 'Digital Forensics',
    level: 'Project-led',
    evidence: [{ label: 'Digital Forensics Framework Project', link: '/projects/digital-forensics-framework' }],
  },
  {
    skill: 'AI & Computer Vision',
    level: 'Project-led',
    evidence: [{ label: 'N-ONE Surveillance Project', link: '/projects/n-one-no-one-escapes' }],
  },
];