import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { securityFocus } from '@/data/content';

export default function SecurityFocus() {
  const reduceMotion = useReducedMotion();
  return <section id="security-focus" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="security-focus-title"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Security focus" title="Defensive security areas in progress." description="A cybersecurity-first portfolio organized around learning evidence, coursework and project work." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{securityFocus.map((focus, index) => <motion.article key={focus.title} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.35, delay: index * 0.05 }} className="rounded-xl border border-white/10 bg-[#091018]/60 p-5 transition hover:border-cyan-300/30 sm:p-6"><span className="font-mono text-xs tracking-[0.18em] text-emerald-300">{focus.number}</span><h3 id={index === 0 ? 'security-focus-title' : undefined} className="mt-6 text-lg font-semibold text-white">{focus.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{focus.text}</p></motion.article>)}</div></div></section>;
}
