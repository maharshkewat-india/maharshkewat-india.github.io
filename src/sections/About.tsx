import Terminal from '@/components/Terminal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div><SectionHeading eyebrow="About" title="Learning with a defender’s mindset." /><p id="about-title" className="mt-6 text-base leading-8 text-slate-400">{profile.description}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[['Current direction', 'Cybersecurity / SOC'], ['Approach', 'Learn · build · document'], ['Location', profile.location], ['Portfolio type', 'Student learning record']].map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.025] p-4"><p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-cyan-300">{label}</p><p className="mt-2 text-sm text-slate-200">{value}</p></div>)}</div></div>
        <Terminal />
      </div>
    </section>
  );
}
