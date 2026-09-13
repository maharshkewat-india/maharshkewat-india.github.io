import { motion, useReducedMotion } from 'framer-motion';

import type { CybersecurityLab } from '@/data/labs';

export default function WriteupCard({ lab }: { lab: CybersecurityLab }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.35 }}
      className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-5 shadow-lg shadow-black/10 transition hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-6"
    >
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{lab.category}</p>
      <h3 className="mt-5 text-xl font-semibold text-white">{lab.title}</h3>
      <p className="mt-3 leading-6 text-slate-400">{lab.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {lab.toolsUsed.map((tool) => (
          <span key={tool} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200">
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <a
          href={lab.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]"
        >
          Read Case Study <span className="ml-2" aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </motion.article>
  );
}