import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -4 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.35 }} className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-5 shadow-lg shadow-black/10 transition hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-6">
      <div className="flex items-start justify-between gap-4"><p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{project.category}</p><span className="rounded border border-emerald-300/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-emerald-200">Verified repo</span></div>
      <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 leading-6 text-slate-400">{project.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-300">{project.highlights.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul>
      <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((item) => <span key={item} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">{item}</span>)}</div>
      <div className="mt-auto flex flex-wrap gap-4 pt-7 text-sm font-semibold"><Link href={`/projects/${project.slug}`} className="text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View project <span aria-hidden="true">→</span></Link><a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">GitHub <span aria-hidden="true">↗</span></a></div>
    </motion.article>
  );
}
