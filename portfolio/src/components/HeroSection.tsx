import React from 'react';

const HeroSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-20 sm:py-40" data-scroll="hero">
      <h1 className="text-5xl font-bold text-cyber-green-500">Maharsh Kewat</h1>
      <p className="mt-4 text-xl text-white">Student pursuing cybersecurity and SOC operations</p>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <button className="bg-cyber-green hover:bg-cyan text-white px-6 py-3 rounded" onClick={()="#projects-section">View Projects</button>
        <button className="bg-cyan hover:bg-cyber-green text-white px-6 py-3 rounded" onClick={()="#security-section">Security Focus</button>
      </div>
      <div className="mt-16 flex items-center max-w-2xl">
        <div className="w-64 h-64 rounded-lg bg-cyan/10 blur-2mt opacity-50"></div>
        <Framer.Motion.div
          initial="{opacity: 0}"
          animate="{opacity: 1}"
          variants="{ease: 'in-out-back'}"
          animateProps="{delay: 1.5}"
          className="mt-10 md:mt-0 text-white text-lg font-semibold"
        >
          <p>Learning SOC operations, building security tools, and designing cyber-resilient systems</p>
        </Framer.Motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
