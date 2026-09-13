import type { ReactNode } from 'react';

import type { CybersecurityLab } from '@/data/labs';

interface DetailCardProps {
  title: string;
  children: ReactNode;
  id: string;
}

function DetailCard({ title, children, id }: DetailCardProps) {
  const headingId = `${id}-${title.toLowerCase().replaceAll(' ', '-')}`;

  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8" aria-labelledby={headingId}>
      <h3 id={headingId} className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-cyan-300">
        {title}
      </h3>
      <div className="mt-4 leading-7 text-slate-300">{children}</div>
    </section>
  );
}

export default function LabCaseStudy({ lab }: { lab: CybersecurityLab }) {
  return (
    <article id={lab.slug} className="scroll-mt-24 border-t border-white/10 pt-12 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{lab.category}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{lab.title}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">{lab.description}</p>
        </div>
        {lab.eventId && <span className="shrink-0 rounded border border-cyan-300/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-cyan-200">Event {lab.eventId}</span>}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <DetailCard id={lab.slug} title="Objective">{lab.objective}</DetailCard>
        <DetailCard id={lab.slug} title="Environment">{lab.environment}</DetailCard>
        <DetailCard id={lab.slug} title="Tools Used">
          <ul className="space-y-2">
            {lab.toolsUsed.map((tool) => <li key={tool} className="flex gap-2"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{tool}</li>)}
          </ul>
        </DetailCard>
        <DetailCard id={lab.slug} title="MITRE ATT&CK Mapping">{lab.mitreAttack}</DetailCard>
      </div>

      <div className="mt-4 grid gap-4">
        <DetailCard id={lab.slug} title="Investigation Process">{lab.investigationProcess}</DetailCard>
        <DetailCard id={lab.slug} title="Findings">{lab.findings}</DetailCard>
        <DetailCard id={lab.slug} title="Recommendations">{lab.recommendations}</DetailCard>
        <DetailCard id={lab.slug} title="Conclusion">{lab.conclusion}</DetailCard>
        <DetailCard id={lab.slug} title="Evidence / Screenshots">
          <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-cyan-300/25 bg-black/20 px-6 text-center text-sm text-slate-400">
            Real investigation screenshots can be added here when available. No evidence is published yet.
          </div>
        </DetailCard>
      </div>

      <div className="mt-10 flex justify-center">
        <a href={lab.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-cyan-300 px-6 py-3 text-base font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1018]">
          GitHub Case Study <span className="ml-2" aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}