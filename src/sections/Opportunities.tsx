import SectionHeading from '@/components/SectionHeading';
import ResumeButton from '@/components/ResumeButton';
import { profile } from '@/data/profile';

const targetRoles = [
  'SOC Analyst Intern',
  'Cybersecurity Intern',
  'Security Operations Intern',
  'Junior Security Analyst',
  'IAM Intern',
];

export default function Opportunities() {
  return (
    <section id="opportunities" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="opportunities-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open to opportunities"
          title="Open to Opportunities"
          description="I'm currently looking for opportunities where I can apply my cybersecurity knowledge, build practical security skills, and contribute to real-world security operations."
        />
        <h2 id="opportunities-title" className="sr-only">Open to Opportunities</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-xl border border-white/10 bg-[#091018]/60 p-6 sm:p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Target roles</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {targetRoles.map((role) => (
                <li key={role} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                  {role}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 sm:p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Connect</h3>
            <p className="mt-4 leading-7 text-slate-300">Explore my resume, public work, and professional profile, or send a message through the contact section.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ResumeButton label="Download Resume" />
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-cyan-300/35 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                GitHub Profile <span className="ml-2" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-cyan-300/35 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                LinkedIn Profile <span className="ml-2" aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-emerald-300/35 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
                Contact Me <span className="ml-2" aria-hidden="true">↓</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}