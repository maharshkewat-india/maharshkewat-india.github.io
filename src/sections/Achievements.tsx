import SectionHeading from '@/components/SectionHeading';
import AchievementCard from '@/components/AchievementCard';
import { achievementActivities } from '@/data/achievements';
import { profile } from '@/data/profile';

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="achievements-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements & activities"
          title="Public work and technical activity."
          description="A concise record of publicly visible projects and activities from my professional profiles."
        />
        <h2 id="achievements-title" className="sr-only">Achievements and activities</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievementActivities.map((activity) => <AchievementCard key={activity.title} activity={activity} />)}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.19em] text-emerald-200">Explore My Profiles</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]">
              GitHub Profile <span className="ml-2" aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-cyan-300/35 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              LinkedIn Profile <span className="ml-2" aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}