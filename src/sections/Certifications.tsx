import { motion, useReducedMotion } from 'framer-motion';
import AchievementCard from '@/components/AchievementCard';
import SectionHeading from '@/components/SectionHeading';
import { achievementActivities } from '@/data/achievements';
import { learningRecords } from '@/data/certifications';
import { profile } from '@/data/profile';

export default function Certifications() {
  const reduceMotion = useReducedMotion();
  const categories = Array.from(new Set(learningRecords.map((record) => record.category)));

  return (
    <section id="certifications" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="credentials-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Credentials / public work" title="Certifications & achievements." description="Linked learning records and publicly documented technical work, presented for quick review." />
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs font-semibold uppercase tracking-[0.19em] text-emerald-200">01 / Certifications</p><h2 id="credentials-title" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">Training credentials</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Each record retains its original provider and verification link.</p></div>
          <div className="mt-8 space-y-10">
            {categories.map((category) => {
              const records = learningRecords.filter((record) => record.category === category);
              return <div key={category}><h3 className="font-mono text-xs font-semibold uppercase tracking-[0.19em] text-cyan-300">{category}</h3><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{records.map((record) => <motion.article key={record.title} initial={false} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -2 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.25 }} className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-[#0b1018]/70 p-5 shadow-lg shadow-black/10 transition hover:border-cyan-300/30 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-2"><p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-300">{record.provider}</p><span className="rounded-full border border-emerald-300/25 bg-emerald-300/[0.06] px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-emerald-200">Verification link available</span></div><h4 className="mt-4 text-lg font-semibold leading-7 text-white">{record.title}</h4><dl className="mt-5 grid grid-cols-2 gap-3 border-y border-white/[0.08] py-4 text-sm"><div><dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-slate-500">Record type</dt><dd className="mt-1 text-slate-200">{record.kind}</dd></div><div><dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-slate-500">Year / date</dt><dd className="mt-1 text-slate-400">Not listed</dd></div></dl><div className="mt-4 flex flex-wrap gap-2">{record.topics.map((topic) => <span key={topic} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">{topic}</span>)}</div>{record.url && <a href={record.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Open verification <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}</motion.article>)}</div></div>;
            })}
          </div>
        </div>
        <div id="achievements" className="scroll-mt-20 mt-16 border-t border-white/10 pt-10" aria-labelledby="achievements-title"><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs font-semibold uppercase tracking-[0.19em] text-emerald-200">02 / Achievements & activities</p><h2 id="achievements-title" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">Public technical work</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Activities are limited to projects already documented in public GitHub repositories.</p></div><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{achievementActivities.map((activity) => <AchievementCard key={activity.title} activity={activity} />)}</div><div className="mt-8 flex flex-wrap gap-3"><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-cyan-300/35 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">GitHub profile <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">LinkedIn profile <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></div>
      </div>
    </section>
  );
}
