import Head from 'next/head';
import Footer from '@/components/Footer';
import Hero from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Achievements from '@/sections/Achievements';
import Certifications from '@/sections/Certifications';
import ContactSection from '@/sections/Contact';
import Education from '@/sections/Education';
import GitHub from '@/sections/GitHub';
import Leadership from '@/sections/Leadership';
import LearningJourney from '@/sections/LearningJourney';
import { ProjectsSection } from '@/sections/Projects';
import Opportunities from '@/sections/Opportunities';
import Resume from '@/sections/Resume';
import SecurityFocus from '@/sections/SecurityFocus';
import {
  AISecurity,
  CloudSecurity,
  DigitalForensics,
  IAM,
  SOCJourney,
} from '@/sections/SecuritySystems';
import SkillsSection from '@/sections/Skills';
import VirtualExperience from '@/sections/VirtualExperience';
import Writeups from '@/sections/Writeups';
import { profile } from '@/data/profile';
import { resume } from '@/data/resume';

export default function Home() {
  const siteUrl = resume.contact.portfolio;

  return (
    <>
      <Head>
        <title>{`${profile.name} | Cybersecurity Portfolio`}</title>
        <meta name="description" content={profile.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${profile.name} | Cybersecurity Portfolio`} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={`${profile.name} | Cybersecurity Portfolio`} />
        <meta property="og:image" content={`${siteUrl}${profile.profilePhoto}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} | Cybersecurity Portfolio`} />
        <meta name="twitter:description" content={profile.description} />
        <meta name="twitter:image" content={`${siteUrl}${profile.profilePhoto}`} />
        <link rel="canonical" href={siteUrl} />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SecurityFocus />
        <ProjectsSection />
        <Writeups />
        <Achievements />
        <SOCJourney />
        <DigitalForensics />
        <AISecurity />
        <CloudSecurity />
        <IAM />
        <SkillsSection />
        <VirtualExperience />
        <Opportunities />
        <Resume />
        <Certifications />
        <Education />
        <Leadership />
        <GitHub />
        <LearningJourney />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}