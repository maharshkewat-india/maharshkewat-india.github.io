// Resume data for Maharsh Kewat
// Used by the Resume section and download-resume button.
// This file is the single source of truth for the resume content
// displayed on the portfolio.

export interface ResumeContact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  twitter?: string;
  portfolio: string;
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  expectedGraduation: string;
  focusAreas: string[];
}

export interface ResumeExperience {
  title: string;
  company: string;
  type: 'Virtual Experience' | 'Project' | 'Internship' | 'Training';
  startDate: string;
  endDate: string;
  bullets: string[];
  certificateUrl?: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ResumeProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  summary: string;
  contact: ResumeContact;
  skills: {
    category: string;
    items: string[];
  }[];
  education: ResumeEducation;
  experience: ResumeExperience[];
  certifications: ResumeCertification[];
  projects: ResumeProject[];
  // URL where the downloadable PDF copy of the resume lives.
  // Place the file under `public/` so Next.js can serve it directly.
  pdfUrl: string;
  pdfFileName: string;
}

export const resume: ResumeData = {
  name: 'Maharsh Kewat',
  headline: 'Cybersecurity Student & SOC Analyst Candidate',
  summary:
    'B.Tech CSE (Cyber Security) student with hands-on training in SOC operations, ' +
    'digital forensics, cloud security, and identity & access management. Strong ' +
    'foundation in network monitoring, incident response workflows, and security ' +
    'automation through virtual experience programs and project work.',
  contact: {
    email: 'maharshk215@gmail.com',
    phone: '+91 9685920827',
    location: 'Satna, Madhya Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/maharsh-kewat01/',
    github: 'https://github.com/maharshkewat-india',
    twitter: 'https://x.com/MaharshK47991',
    portfolio: 'https://maharshkewat-india.github.io',
  },
  skills: [
    {
      category: 'Cybersecurity',
      items: [
        'SOC Operations',
        'Incident Response',
        'Digital Forensics',
        'Network Security',
        'Vulnerability Assessment',
        'Risk Assessment',
        'Information Security',
        'Threat Analysis',
      ],
    },
    {
      category: 'Cloud & Identity',
      items: [
        'Cloud Security (Azure / Google Cloud)',
        'Identity & Access Management (IAM)',
        'Microsoft Entra ID / Azure AD',
        'Microsoft Sentinel (learning)',
        'Wazuh (learning)',
        'Splunk (learning)',
      ],
    },
    {
      category: 'Tools & Technologies',
      items: ['Python', 'Linux', 'Wireshark', 'Nmap', 'Tableau', 'Excel', 'Git'],
    },
    {
      category: 'AI & Data',
      items: [
        'Machine Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Data Analysis',
        'Data Visualization',
        'OpenCV',
        'DeepFace',
        'Streamlit',
      ],
    },
    {
      category: 'Professional Skills',
      items: [
        'Communication',
        'Critical Thinking',
        'Problem Solving',
        'Analytical Skills',
        'Team Building',
        'Project Planning',
      ],
    },
  ],
  education: {
    degree: 'B.Tech in Computer Science & Engineering (Cyber Security)',
    institution: 'AKS University',
    location: 'Satna, Madhya Pradesh, India',
    startYear: 2022,
    expectedGraduation: '2025',
    focusAreas: [
      'Network Security',
      'Cloud & AI Systems',
      'Digital Forensics',
      'Identity & Access Management',
    ],
  },
  experience: [
    {
      title: 'Cybersecurity Job Simulation',
      company: 'Mastercard (via Forage)',
      type: 'Virtual Experience',
      startDate: '2024',
      endDate: '2024',
      bullets: [
        'Worked as an analyst on the Security Awareness Team, identifying threats such as phishing.',
        'Implemented targeted security training to improve organizational security posture.',
        'Developed threat reports and communicated findings to non-technical stakeholders.',
      ],
      certificateUrl:
        'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_696bac122e40c7c03c06d2b9_1781940301585_completion_certificate.pdf',
    },
    {
      title: 'Cybersecurity Analyst Job Simulation',
      company: 'Tata (via Forage)',
      type: 'Virtual Experience',
      startDate: '2024',
      endDate: '2024',
      bullets: [
        'Completed a job simulation involving identity and access management (IAM).',
        'Aligned security controls with business objectives and access requirements.',
        'Practiced security assessment, access control, and user provisioning workflows.',
      ],
      certificateUrl:
        'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_696bac122e40c7c03c06d2b9_1782468334263_completion_certificate.pdf',
    },
    {
      title: 'Data Analytics Job Simulation',
      company: 'Deloitte (via Forage)',
      type: 'Virtual Experience',
      startDate: '2024',
      endDate: '2024',
      bullets: [
        'Completed a data analytics and forensic-technology job simulation.',
        'Created an interactive data dashboard using Tableau and Excel.',
        'Translated raw forensic data into clear business insights.',
      ],
      certificateUrl:
        'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_696bac122e40c7c03c06d2b9_1782473206773_completion_certificate.pdf',
    },
    {
      title: 'Quantitative Research Job Simulation',
      company: 'J.P. Morgan (via Forage)',
      type: 'Virtual Experience',
      startDate: '2024',
      endDate: '2024',
      bullets: [
        "Analyzed a book of loans to estimate a customer's probability of default.",
        'Applied dynamic programming and FICO score conversion techniques.',
        'Built quantitative models to support credit and risk decisions.',
      ],
      certificateUrl:
        'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_696bac122e40c7c03c06d2b9_1781935457189_completion_certificate.pdf',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/wzrmpc9n',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/ESKVMA7P',
    },
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      date: '2024',
      url: 'https://www.credly.com/badges/9dec5597-7ca2-4573-818f-b0e192cf916d',
    },
    {
      name: 'Information Security Analyst',
      issuer: 'Skill India',
      date: '2024',
    },
    {
      name: 'Network Security Engineer',
      issuer: 'Skill India',
      date: '2024',
    },
  ],
  projects: [
    {
      title: 'Digital Forensics Evidence Management System',
      category: 'Cybersecurity',
      description:
        'A modern web-based platform for managing digital forensic cases, evidence, and chain-of-custody. Built with a FastAPI backend, Next.js frontend and SQLite for portable local storage.',
      technologies: ['FastAPI', 'Next.js 16', 'React 19', 'SQLite', 'Tailwind CSS 4', 'Python 3.10+', 'JWT', 'PBKDF2'],
      highlights: [
        'PBKDF2-HMAC-SHA256 password hashing with random salts and JWT sessions',
        'Role-Based Access Control with 5 default roles and 20+ granular permissions',
        'MD5 & SHA-256 chunked streaming hash computation and integrity verification',
        'Append-only chain-of-custody timeline and audit logging',
      ],
      github: 'https://github.com/maharshkewat-india/cybersecurity-projects',
    },
    {
      title: 'LSB Steganography App',
      category: 'Cybersecurity',
      description:
        'A Python Tkinter desktop application that hides text messages inside PNG images using Least Significant Bit steganography.',
      technologies: ['Python 3', 'Tkinter', 'Pillow'],
      highlights: [
        'Encode mode with automatic _encoded filename suffix',
        'Decode mode that extracts hidden messages from PNGs',
        '32-bit length prefix and UTF-8 message encoding',
      ],
      github: 'https://github.com/maharshkewat-india/cybersecurity-projects',
    },
    {
      title: 'SENTINEL-AI',
      category: 'AI & Computer Vision',
      description:
        'An AI-powered smart surveillance platform with real-time detection and emergency alerts.',
      technologies: ['YOLO26', 'FastAPI', 'React', 'Docker', 'PostgreSQL'],
      highlights: [
        'Real-time object detection and emergency alerting',
        'Dockerized deployment with PostgreSQL persistence',
        'Modern full-stack architecture (FastAPI + React)',
      ],
      github: 'https://github.com/maharshkewat-india/SENTINEL-AI',
    },
    {
      title: 'N-ONE — No One Escapes',
      category: 'AI & Computer Vision',
      description:
        'AI surveillance and threat-tracking project built with Python, Streamlit, and OpenCV.',
      technologies: ['Python', 'Streamlit', 'OpenCV', 'DeepFace'],
      highlights: [
        'Person-tracking mode',
        'Attendance mode',
        'Threat-detection mode',
      ],
      github: 'https://github.com/maharshkewat-india/N-ONE-No-One-Escapes',
    },
    {
      title: 'J.P. Morgan Quantitative Research',
      category: 'Data Analysis',
      description:
        'Python financial-analytics project exploring natural-gas price analysis, pricing models, and risk assessment.',
      technologies: ['Python'],
      highlights: [
        'Natural-gas price analysis',
        'Pricing-model development and risk assessment',
        'FIFO-based bucket optimization',
      ],
      github: 'https://github.com/maharshkewat-india/JPMorgan',
    },
  ],
  pdfUrl: '/Maharsh_Kewat_Resume.pdf',
  pdfFileName: 'Maharsh_Kewat_Resume.pdf',
};
