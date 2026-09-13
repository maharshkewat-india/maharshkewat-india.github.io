export interface AchievementActivity {
  title: string;
  description: string;
  category: string;
  topics: string[];
  sourceLabel: 'GitHub' | 'LinkedIn';
  sourceUrl: string;
}

export const achievementActivities: AchievementActivity[] = [
  {
    title: 'CyberTrace-Nexus',
    description: 'AI-Assisted Digital Incident Reconstruction & Evidence Correlation Platform with secure evidence management, chain of custody, and AI-assisted investigation.',
    category: 'Public GitHub project',
    topics: ['Python', 'Digital Incident Investigation'],
    sourceLabel: 'GitHub',
    sourceUrl: 'https://github.com/maharshkewat-india/CyberTrace-Nexus',
  },
  {
    title: 'Cybersecurity Projects',
    description: 'A curated list of technical projects and hands-on experiments.',
    category: 'Public GitHub project collection',
    topics: ['Python', 'Cybersecurity'],
    sourceLabel: 'GitHub',
    sourceUrl: 'https://github.com/maharshkewat-india/cybersecurity-projects',
  },
  {
    title: 'N-ONE',
    description: 'An advanced AI Surveillance & Threat Tracking Platform using Python, Streamlit, and OpenCV, with multi-mode operation powered by DeepFace.',
    category: 'Public GitHub project',
    topics: ['Python', 'Streamlit', 'OpenCV', 'DeepFace'],
    sourceLabel: 'GitHub',
    sourceUrl: 'https://github.com/maharshkewat-india/N-ONE',
  },
];