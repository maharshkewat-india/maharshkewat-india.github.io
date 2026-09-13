import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { projects, type ProjectCategory } from '@/data/projects';

interface ProjectsSectionProps {
  featuredOnly?: boolean;
}

export function ProjectsSection({ featuredOnly = false }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const [showAll, setShowAll] = useState(false);
  const reduceMotion = useReducedMotion();
  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (!featuredOnly || project.featured) &&
          (filter === 'All' || project.category === filter),
      ),
    [featuredOnly, filter],
  );
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const filters: Array<'All' | ProjectCategory> = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-x-clip border-y border-white/[0.06] bg-white/[0.01] py-20 sm:py-28"
      aria-labelledby="projects-title"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/3 h-72 w-72 rounded-full bg-cyan-300/[0.025] blur-3xl" />
        <div className="absolute right-[8%] top-1/4 h-64 w-64 rounded-full bg-emerald-400/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={featuredOnly ? 'Featured projects' : 'Projects'}
            title={
              featuredOnly
                ? 'Repository-backed project work.'
                : 'Projects and practical experiments.'
            }
            description="Project summaries are limited to information represented in public repositories."
          />

          <div
            className="flex flex-wrap items-center gap-2 rounded-lg border border-white/[0.08] bg-[#0b1018]/70 p-2 shadow-lg shadow-black/20 backdrop-blur-md"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setFilter(item);
                  setShowAll(false);
                }}
                aria-pressed={filter === item}
                className={`rounded-md border px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  filter === item
                    ? 'border-cyan-300/50 bg-gradient-to-r from-cyan-300/15 to-cyan-300/5 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                    : 'border-transparent text-slate-400 hover:border-white/15 hover:bg-white/[0.03] hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout={!reduceMotion}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout={!reduceMotion}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 rounded-lg border border-white/10 bg-[#0b1018]/60 p-6 text-center text-slate-400 backdrop-blur-sm">
            No project is listed in this category yet.
          </p>
        )}

        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="group inline-flex items-center gap-2 rounded-md border border-cyan-300/35 bg-gradient-to-r from-cyan-300/[0.06] to-cyan-300/[0.02] px-6 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <motion.span
                className="inline-block"
                animate={showAll ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.25 }}
              >
                ↓
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
