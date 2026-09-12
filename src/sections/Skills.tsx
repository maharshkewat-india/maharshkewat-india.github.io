import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skillCategories, skillEvidence } from '@/data/skills';

function ExternalOrInternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http');
  return external
    ? <a href={href} target="_blank" rel="noreferrer" className="rounded-sm text-xs text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{children}<span className="sr-only"> (opens in a new tab)</span></a>
    : <Link href={href} className="rounded-sm text-xs text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{children}</Link>;
}

export default function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const [showMore, setShowMore] = useState(false);
  const visibleCategories = showMore ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="skills" className="scroll-mt-20 section-py" aria-labelledby="skills-title">
      <div className="container-max">
        <SectionHeading
          eyebrow="Technical skills"
          title="Learning areas, not percentage bars."
          description="These categories organize coursework, learning records and projects. Individual evidence is shown for key focus areas."
        />
        <p id="skills-title" className="sr-only">Technical skills</p>

        {/* Skill categories */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
          {visibleCategories.map((category, catIndex) => (
            <motion.article
              key={category.name}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: catIndex * 0.06 }}
              className="glass-card p-5 group"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>

        {/* Skill evidence */}
        <AnimatePresence initial={false}>
        {showMore && <motion.div initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} className="mt-10 grid gap-4 overflow-hidden lg:grid-cols-2">
          {skillEvidence.map((item, evIndex) => (
            <motion.article
              key={item.skill}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: 0.3 + evIndex * 0.06 }}
              className="glass-card p-5 border-cyan-300/20 bg-cyan-300/[0.025]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.skill}</h3>
                <span className="rounded border border-emerald-300/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-emerald-200">
                  {item.level}
                </span>
              </div>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-slate-500">Evidence</p>
              <ul className="mt-3 space-y-2">
                {item.evidence.map((evidence) => (
                  <li key={evidence.label}>
                    <ExternalOrInternalLink href={evidence.link}>{evidence.label}</ExternalOrInternalLink>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>}
        </AnimatePresence>
        <div className="mt-8 flex justify-center"><button type="button" onClick={() => setShowMore((current) => !current)} className="rounded-md border border-cyan-300/35 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{showMore ? 'Show Less' : 'View More Skills'}</button></div>
      </div>
    </section>
  );
}
