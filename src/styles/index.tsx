import ContactSection from '@/sections/Contact';
import {
  AISecurity,
  CloudSecurity,
  DigitalForensics,
  IAM,
  SOCJourney,
} from '@/sections/SecuritySystems';

// Import other sections here as you create them based on your plan.md
// For example:
// import HeroSection from '@/sections/Hero';
// import AboutSection from '@/sections/About';
// import ProjectsSection from '@/sections/Projects';
// import SkillsSection from '@/sections/Skills';

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <SecurityFocusSection /> */}
      {/* <ProjectsSection /> */}
      <SOCJourney />
      <DigitalForensics />
      <AISecurity />
      <CloudSecurity />
      <IAM />
      {/* <SkillsSection /> */}
      {/* <ExperienceSection /> */}
      {/* <CertificationsSection /> */}
      <ContactSection />
      {/* <Footer /> */}
    </>
  );
}