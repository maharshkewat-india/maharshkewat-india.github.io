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
        <section className="section-py" aria-labelledby="labs-title">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cybersecurity labs"
              title="Investigation notes and case studies."
              description="A growing record of practical SOC and incident investigation work."
              headingLevel="h1"
            />

            <nav className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Cybersecurity lab case studies">
              {cybersecurityLabs.map((lab) => (
                <a key={lab.slug} href={`#${lab.slug}`} className="rounded-lg border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-emerald-300">{lab.category}</span>
                  <span className="mt-3 block font-semibold text-white">{lab.title}</span>
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