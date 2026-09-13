import Head from 'next/head';

import Footer from '@/components/Footer';
import LabCaseStudy from '@/components/LabCaseStudy';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import { cybersecurityLabs } from '@/data/labs';
import { profile } from '@/data/profile';
import { resume } from '@/data/resume';

export default function LabsPage() {
  return (
    <>
      <Head>
        <title>{`Cybersecurity Labs | ${profile.name}`}</title>
        <meta name="description" content="Cybersecurity lab investigations by Maharsh Kewat." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Cybersecurity Labs | ${profile.name}`} />
        <meta property="og:description" content="Cybersecurity lab investigations by Maharsh Kewat." />
        <meta property="og:url" content={`${resume.contact.portfolio}/labs`} />
        <meta property="og:site_name" content={`${profile.name} | Cybersecurity Portfolio`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Cybersecurity Labs | ${profile.name}`} />
        <meta name="twitter:description" content="Cybersecurity lab investigations by Maharsh Kewat." />
        <link rel="canonical" href={`${resume.contact.portfolio}/labs`} />
      </Head>
      <Navbar />
      <main className="bg-[#0B1018] pt-16">
        <section className="relative overflow-x-clip border-b border-white/[0.06] bg-white/[0.01] section-py" aria-labelledby="labs-title">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cybersecurity labs"
              title="Investigation notes and case studies."
              description="A growing record of practical SOC and incident investigation work."
              headingLevel="h1"
            />

            <nav className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Cybersecurity lab case studies">
              {cybersecurityLabs.map((lab) => (
                <a key={lab.slug} href={`#${lab.slug}`} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1018]/75 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-[#0d1620]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  <span aria-hidden="true" className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-70" />
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-emerald-300">{lab.category}</span>
                  <span className="mt-3 block text-lg font-semibold leading-6 text-white transition group-hover:text-cyan-100">{lab.title}</span>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-cyan-200">Open case study <span className="ml-1.5" aria-hidden="true">→</span></span>
                </a>
              ))}
            </nav>

            <div className="mt-16 space-y-12">
              {cybersecurityLabs.map((lab) => <LabCaseStudy key={lab.slug} lab={lab} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
