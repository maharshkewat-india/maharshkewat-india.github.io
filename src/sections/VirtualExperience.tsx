import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { simulations } from '@/data/simulations';

export default function VirtualExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Training / virtual experience" title="Job simulations and virtual experiences." description="Documented virtual learning experiences — not employment, internships, or professional work history." />
        <p id="experience-title" className="sr-only">Training and virtual experience records</p>

        <div className="mt-10 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-3 sm:px-5" role="note">
          <p className="text-sm leading-6 text-slate-300"><span className="font-semibold text-cyan-100">Record context:</span> These are provider-led virtual experiences and job simulations. They are presented as training records, not employment roles.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {simulations.map((simulation) => (
            <motion.article key={simulation.title} initial={false} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -2 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.25 }} className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-[#091018]/70 p-5 shadow-lg shadow-black/10 transition hover:border-cyan-300/30 hover:bg-[#0b1620]/80 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{simulation.company}</p>
                {simulation.url && <span className="rounded-full border border-emerald-300/25 bg-emerald-300/[0.06] px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-emerald-200">Certificate link available</span>}
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{simulation.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md border border-cyan-300/25 bg-cyan-300/[0.05] px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cyan-100">Job simulation</span>
                <span className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-400">Virtual experience</span>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-5">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Experience summary</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{simulation.focus}</p>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-5">
                <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Skills & activities</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {simulation.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">{skill}</span>)}
                </div>
              </div>

              {simulation.url && <a href={simulation.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center rounded-md border border-cyan-300/35 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View certificate <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
