import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.35 }}
      className="group relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b1018]/75 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-cyan-300/35 hover:bg-[#0d1620]/85 sm:p-6"
    >
      <span aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-70" />
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{project.category}</p>
        <span className="rounded border border-emerald-300/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-emerald-200">Verified repo</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{project.title}</h3>
      <p className="mt-3 leading-6 text-slate-400">{project.description}</p>
      <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
        {project.technologies.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs leading-4 text-slate-300 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.04] hover:text-cyan-100">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-7 text-sm font-semibold">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-md bg-cyan-300 px-4 py-2.5 text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018]"
        >
          View project <span aria-hidden="true">→</span>
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-cyan-300/30 px-4 py-2.5 text-slate-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.article>
  );
}
