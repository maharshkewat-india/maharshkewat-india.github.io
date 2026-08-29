import Head from 'next/head';
import Footer from '@/components/Footer';
import Hero from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Certifications from '@/sections/Certifications';
import ContactSection from '@/sections/Contact';
import Education from '@/sections/Education';
import GitHub from '@/sections/GitHub';
import Leadership from '@/sections/Leadership';
import LearningJourney from '@/sections/LearningJourney';
import { ProjectsSection } from '@/sections/Projects';
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
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <>
      <Head>
        <title>{profile.name} - Cybersecurity Portfolio</title>
        <meta
          name="description"
          content={profile.description}
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SecurityFocus />
        <ProjectsSection featuredOnly />
        <SOCJourney />
        <DigitalForensics />
        <AISecurity />
        <CloudSecurity />
        <IAM />
        <SkillsSection />
        <VirtualExperience />
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