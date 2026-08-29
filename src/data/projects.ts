export type ProjectCategory = 'Cybersecurity';

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
// All projects are sourced from https://github.com/maharshkewat-india
export const projects: Project[] = [
  {
    slug: 'digital-forensics-evidence-management',
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
    featured: true,
  },
  {
    slug: 'lsb-steganography-app',
    title: 'LSB Steganography App',
    category: 'Cybersecurity',
    description:
      'A Python Tkinter desktop application that hides text messages inside PNG images using Least Significant Bit steganography. Includes encode and decode modes with UTF-8 support.',
    technologies: ['Python 3', 'Tkinter', 'Pillow'],
    highlights: [
      'Encode mode: select PNG, enter secret message, save with _encoded suffix',
      'Decode mode: extract hidden messages from encoded PNGs',
      '32-bit length prefix for clean message boundaries and UTF-8 message data',
    ],
    github: 'https://github.com/maharshkewat-india/cybersecurity-projects',
    featured: true,
  },
  {
    slug: 'sentinel-ai',
    title: 'SENTINEL-AI',
    category: 'Cybersecurity',
    description:
      'An AI-powered smart surveillance platform built for security use cases with real-time detection and emergency alerts. Built with YOLO26 for object detection, FastAPI for the backend and React for the UI.',
    technologies: ['YOLO26', 'FastAPI', 'React', 'Docker', 'PostgreSQL'],
    highlights: [
      'Real-time object detection and emergency alerting for security monitoring',
      'Dockerized deployment with PostgreSQL persistence',
      'Modern full-stack architecture (FastAPI + React)',
    ],
    github: 'https://github.com/maharshkewat-india/SENTINEL-AI',
    featured: true,
  },
];
