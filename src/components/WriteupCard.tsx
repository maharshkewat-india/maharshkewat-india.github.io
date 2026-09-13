import { motion, useReducedMotion } from 'framer-motion';

import type { CybersecurityLab } from '@/data/labs';

export default function WriteupCard({ lab }: { lab: CybersecurityLab }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.35 }}
      className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b1018]/75 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-cyan-300/35 hover:bg-[#0d1620]/85 sm:p-6"
    >
      <span aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-70" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{lab.category}</p>
        {lab.eventId && <span className="rounded border border-emerald-300/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-emerald-200">Event {lab.eventId}</span>}
      </div>
      <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{lab.title}</h3>
      <p className="mt-3 leading-6 text-slate-400">{lab.description}</p>

      <div className="mt-5 border-t border-white/[0.07] pt-4">
        <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Investigation focus</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{lab.objective}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {lab.toolsUsed.map((tool) => (
          <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs leading-4 text-slate-300 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.04] hover:text-cyan-100">
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <a
          href={lab.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1018]"
        >
          Read Case Study <span className="ml-2" aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </motion.article>
  );
}
