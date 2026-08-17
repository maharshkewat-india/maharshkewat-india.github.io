import SectionHeading from '@/components/SectionHeading';
import { simulations } from '@/data/simulations';

export default function VirtualExperience() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industry virtual experience" title="Job simulations and virtual experiences." description="These learning experiences are not employment, internships or professional work history." />
        <p id="experience-title" className="sr-only">Industry virtual experience</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {simulations.map((simulation) => (
            <article key={simulation.title} className="flex flex-col rounded-xl border border-white/10 bg-[#091018]/60 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3"><p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-300">{simulation.company}</p><span className="rounded border border-white/10 px-2 py-1 text-[0.62rem] uppercase tracking-[0.1em] text-slate-400">Virtual experience</span></div>
              <h3 className="mt-5 text-lg font-semibold text-white">{simulation.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{simulation.focus}</p>
              <div className="mt-5 flex flex-wrap gap-2">{simulation.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">{skill}</span>)}</div>
              {simulation.url && <a href={simulation.url} target="_blank" rel="noreferrer" className="mt-auto pt-5 text-sm font-semibold text-cyan-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Show credential ↗<span className="sr-only"> (opens in a new tab)</span></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}