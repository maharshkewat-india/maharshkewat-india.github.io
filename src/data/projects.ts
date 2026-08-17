export type ProjectCategory = 'Cybersecurity' | 'AI & Computer Vision' | 'Data Analysis' | 'Machine Learning';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
  featured: boolean;
}

// Details below are restricted to public repository descriptions and code-facing metadata.
export const projects: Project[] = [
  {
    slug: 'digital-forensics-framework',
    title: 'Digital Forensics Framework',
    category: 'Cybersecurity',
    description:
      'A Windows-friendly Python project for organizing forensic evidence collection and documentation workflows.',
    technologies: ['Python'],
    highlights: [
      'Case registration and evidence logging',
      'MD5 and SHA-256 file-hash generation',
      'Chain-of-custody tracking and interactive reporting',
    ],
    github: 'https://github.com/maharshkewat-india/Digital-Forensics-Framework',
    featured: true,
  },
  {
    slug: 'n-one-no-one-escapes',
    title: 'N-ONE — No One Escapes',
    category: 'AI & Computer Vision',
    description:
      'An AI surveillance and threat-tracking project built with Python, Streamlit and OpenCV.',
    technologies: ['Python', 'Streamlit', 'OpenCV', 'DeepFace'],
    highlights: [
      'Repository-described person-tracking mode',
      'Repository-described attendance mode',
      'Repository-described threat-detection mode',
    ],
    github: 'https://github.com/maharshkewat-india/N-ONE-No-One-Escapes',
    featured: true,
  },
  {
    slug: 'jpmorgan-quantitative-research',
    title: 'J.P. Morgan Quantitative Research',
    category: 'Data Analysis',
    description:
      'A Python financial analytics project exploring natural-gas price analysis, pricing models and risk assessment.',
    technologies: ['Python'],
    highlights: [
      'Natural-gas price analysis',
      'Pricing-model development and risk assessment',
      'FIFO-based bucket optimization',
    ],
    github: 'https://github.com/maharshkewat-india/JPMorgan',
    featured: true,
  },
  {
    slug: 'chat-bot',
    title: 'Chat Bot',
    category: 'Machine Learning',
    description: 'A simple chatbot project trained with scikit-learn and presented through a Tkinter interface.',
    technologies: ['Python', 'scikit-learn', 'Tkinter'],
    highlights: ['Machine-learning chatbot experiment', 'Tkinter graphical interface'],
    github: 'https://github.com/maharshkewat-india/chat-bot',
    featured: false,
  },
];
