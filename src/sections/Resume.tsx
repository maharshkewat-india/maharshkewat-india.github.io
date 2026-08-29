import SectionHeading from '@/components/SectionHeading';
import ResumeButton from '@/components/ResumeButton';
import { resume } from '@/data/resume';

const formatDateRange = (start: string, end: string): string => {
  // Both values are years (e.g., "2024"). Display them as a single
  // year when start and end match, otherwise as a range.
  if (start === end) {
    return start;
  }
  return `${start} – ${end}`;
};

export default function Resume() {
  return (
    <section
      id="resume"
      className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title="A snapshot of my training and project work."
            description="A short, scannable view of the same content available in the downloadable PDF."
          />
          <div className="shrink-0">
            <ResumeButton />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-10 rounded-xl border border-white/10 bg-[#091018]/60 p-6">
          <h3 id="resume-heading" className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Summary
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-300">{resume.summary}</p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <article className="rounded-xl border border-white/10 bg-[#091018]/60 p-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Education
            </h3>
            <p className="mt-3 text-lg font-semibold text-white">
              {resume.education.degree}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              {resume.education.institution} · {resume.education.location}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {resume.education.startYear} – {resume.education.expectedGraduation}
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {resume.education.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </article>

          {/* Skills */}
          <article className="rounded-xl border border-white/10 bg-[#091018]/60 p-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Skills
            </h3>
            <div className="mt-3 space-y-3">
              {resume.skills.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-white">{group.category}</p>
                  <p className="mt-1 text-sm text-slate-300">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Experience & Virtual Programs
          </h3>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {resume.experience.map((exp) => (
              <article
                key={`${exp.company}-${exp.title}`}
                className="rounded-xl border border-white/10 bg-[#091018]/60 p-5"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-cyan-300">
                  {exp.type}
                </p>
                <h4 className="mt-2 text-base font-semibold text-white">{exp.title}</h4>
                <p className="mt-1 text-sm text-slate-300">
                  {exp.company} · {formatDateRange(exp.startDate, exp.endDate)}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    View certificate ↗
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-6">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Certifications
          </h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {resume.certifications.map((cert) => (
              <article
                key={cert.name}
                className="rounded-xl border border-white/10 bg-[#091018]/60 p-4"
              >
                <p className="text-sm font-semibold text-white">{cert.name}</p>
                <p className="mt-1 text-xs text-slate-400">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs font-semibold text-cyan-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    Open credential ↗
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Bottom download CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Need a copy?
          </p>
          <p className="max-w-xl text-sm text-slate-300">
            Download the PDF version of my resume for a one-page view of skills, training, and projects.
          </p>
          <ResumeButton label="Download Resume (PDF)" />
        </div>
      </div>
    </section>
  );
}
