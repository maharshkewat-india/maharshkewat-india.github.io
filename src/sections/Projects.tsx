import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects, type ProjectCategory } from '@/data/projects';

export function ProjectsSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const reduceMotion = useReducedMotion();
  const visibleProjects = useMemo(() => projects.filter((project) => (!featuredOnly || project.featured) && (filter === 'All' || project.category === filter)), [featuredOnly, filter]);

  const filters: Array<'All' | ProjectCategory> = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);

  return <section id="projects" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="projects-title"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow={featuredOnly ? 'Featured projects' : 'Projects'} title={featuredOnly ? 'Repository-backed project work.' : 'Projects and practical experiments.'} description="Project summaries are limited to information represented in public repositories." /><div className="flex flex-wrap gap-2" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-md border px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${filter === item ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100' : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`} aria-pressed={filter === item}>{item}</button>)}</div></div><motion.div layout={!reduceMotion} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"><AnimatePresence mode="popLayout">{visibleProjects.map((project) => <motion.div key={project.slug} layout={!reduceMotion} exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}><ProjectCard project={project} /></motion.div>)}</AnimatePresence></motion.div>{visibleProjects.length === 0 && <p className="mt-10 rounded-lg border border-white/10 p-6 text-slate-400">No project is listed in this category yet.</p>}</div></section>;
}

export default ProjectsSection;
