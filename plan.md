# Portfolio Implementation Plan

## Overview
This plan outlines the steps to build a production‑ready portfolio website for **Maharsh Kewat**. The site will showcase education, projects, certifications, simulations, skills, and learning journey while adhering to the strict content rules provided.

## 1. Project Setup
- Initialize a **Next.js 13** project with TypeScript.
- Add **Tailwind CSS** for styling and **Framer Motion** for animations.
- Configure **ESLint** and **Prettier** for code quality.
- Set up **GitHub Actions** for CI/CD (build, lint, test).

## 2. Directory Structure
```
src/
├── components/          # Reusable UI components
├── sections/            # Page sections (Hero, About, Projects, etc.)
├── pages/               # Next.js pages
├── data/                # Static data files (profile.ts, projects.ts, …)
├── hooks/               # Custom hooks (e.g., useScroll, useDarkMode)
├── lib/                 # Utility functions (e.g., fetchGitHub, fetchLinkedIn)
├── assets/              # Images, icons, SVGs
└── styles/              # Global CSS, Tailwind config
```

## 3. Data Modeling
Create TypeScript interfaces for each data type:
- `Profile`
- `Project`
- `Skill`
- `Certification`
- `Simulation`
- `Learning`
- `Education`
- `Leadership`

Populate these files with verified data from LinkedIn and GitHub. Use the following sources:
- LinkedIn profile (public data)
- GitHub public repositories (verified via web search)
- Certifications listed in the LinkedIn summary

## 4. Component Design
| Section | Component | Key Features |
|---------|-----------|--------------|
| Hero | `HeroSection` | Hero text, CTA buttons, social icons, SOC‑inspired animation |
| About | `AboutSection` | Student narrative, education, career focus |
| Security Focus | `SecurityFocusSection` | Grid of security domains with icons |
| Projects | `ProjectsSection` | Filterable project cards, case study links |
| SOC Journey | `SOCJourneySection` | Workflow diagram with animations |
| Forensics | `ForensicsSection` | Digital forensics framework diagram |
| AI | `AISection` | AI‑security intersection, learning badges |
| Cloud | `CloudSection` | Cloud learning path, badges |
| IAM | `IAMSection` | IAM flow diagram |
| Skills | `SkillsSection` | Skill categories with evidence links |
| Experience | `ExperienceSection` | Virtual experience cards |
| Certifications | `CertificationsSection` | Badge grid with links |
| Education | `EducationSection` | Degree details |
| Leadership | `LeadershipSection` | Ambassador role |
| GitHub | `GitHubSection` | Featured repos, language stats |
| Contact | `ContactSection` | Contact form, LinkedIn button |
| Footer | `Footer` | Navigation, copyright |
| Terminal | `Terminal` | Decorative terminal component |

## 5. Page Layout
- **Home** (`pages/index.tsx`): Hero → About → Security Focus → Projects → SOC Journey → Forensics → AI → Cloud → IAM → Skills → Experience → Certifications → Education → Leadership → GitHub → Learning Journey → Contact → Footer.
- **Projects** (`pages/projects.tsx`): Filterable list of all projects.
- **Security** (`pages/security.tsx`): Detailed security focus and SOC journey.
- **Skills** (`pages/skills.tsx`): Skill categories and evidence.
- **Learning** (`pages/learning.tsx`): Learning journey timeline.
- **Experience** (`pages/experience.tsx`): Virtual experience cards.
- **Contact** (`pages/contact.tsx`): Contact form.

## 6. Styling & Theming
- Dark theme with colors: `#06080D`, `#0B1018`, `#111827`, Cyber Green, Cyan, White, Slate.
- Use Tailwind's `dark:` variants for dark mode.
- Glassmorphism cards for sections.
- Security grid and network node icons.

## 7. Animations
- Use **Framer Motion** for:
  - Hero reveal
  - Card hover effects
  - Timeline scroll animations
  - SOC workflow transitions
  - Project filter transitions
- Respect `prefers-reduced-motion` media query.

## 8. Accessibility
- Semantic HTML tags.
- ARIA labels for interactive elements.
- Keyboard navigation support.
- Sufficient color contrast.
- Alt text for images.

## 9. SEO & Metadata
- Set `<title>` and `<meta description>` per page.
- OpenGraph and Twitter card tags.
- Favicon and canonical URLs.
- Generate `sitemap.xml` and `robots.txt` via Next.js plugin.

## 10. CI/CD & Deployment
- GitHub Actions workflow: lint → build → deploy to Vercel.
- Environment variables for any API keys (none required for static site).
- Ensure no secrets are committed.

## 11. Testing
- Unit tests for components using **React Testing Library**.
- E2E tests with **Playwright** for navigation and form submission.
- Accessibility tests with **axe-core**.

## 12. Documentation
- README with project overview, setup instructions, and contribution guidelines.
- Inline comments in data files explaining source of each entry.

## 13. Deliverables
- Full source code in a GitHub repository.
- Deployed site URL (e.g., `https://maharshkewat.vercel.app`).
- Documentation and test reports.

---

**Next Step**: Create the project skeleton and data files as outlined.

---

*This plan is ready for approval.*