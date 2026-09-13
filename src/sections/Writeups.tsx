import SectionHeading from '@/components/SectionHeading';
import WriteupCard from '@/components/WriteupCard';
import { cybersecurityLabs } from '@/data/labs';

export default function Writeups() {
  return (
    <section id="writeups" className="relative scroll-mt-20 overflow-x-clip border-y border-white/[0.06] bg-white/[0.01] py-20 sm:py-28" aria-labelledby="writeups-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Security write-ups"
          title="Investigation notes and case studies."
          description="Short, repository-backed write-ups from practical cybersecurity lab work."
        />
        <h2 id="writeups-title" className="sr-only">Security write-ups</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cybersecurityLabs.map((lab) => <WriteupCard key={lab.slug} lab={lab} />)}
        </div>
      </div>
    </section>
  );
}
