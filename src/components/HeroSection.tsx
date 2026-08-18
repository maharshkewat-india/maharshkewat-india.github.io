import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/profile';
import { SocialLinks } from '@/components/SocialLinks';

const fadeUp = (delay: number, reduced: boolean | null) => ({
  initial: reduced ? false : { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 pt-16" aria-labelledby="hero-title">
      <div aria-hidden="true" className="absolute inset-0 cyber-grid opacity-60" />
      <div aria-hidden="true" className="absolute left-[12%] top-24 h-56 w-56 rounded-full bg-cyan-400/[0.08] blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {[['left-[8%] top-[29%]', 'h-2 w-2'], ['left-[22%] top-[68%]', 'h-1.5 w-1.5'], ['right-[16%] top-[27%]', 'h-2 w-2'], ['right-[27%] bottom-[22%]', 'h-1.5 w-1.5']].map(([position, size], index) => <motion.span key={position} className={`absolute rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.9)] ${position} ${size}`} animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }} transition={{ duration: 2.8 + index * 0.4, repeat: Infinity }} />)}
      </div>
      <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <motion.p {...fadeUp(0, reduceMotion)} className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300"><span className="mr-2 text-emerald-300">●</span>Security operations · learning portfolio</motion.p>
          <motion.h1 {...fadeUp(0.1, reduceMotion)} id="hero-title" className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl xl:text-7xl">MAHARSH <span className="text-gradient">KEWAT</span></motion.h1>
          <motion.p {...fadeUp(0.18, reduceMotion)} className="mt-6 max-w-2xl font-mono text-base font-medium uppercase leading-7 tracking-[0.1em] text-cyan-100 sm:text-lg">Cybersecurity Student<br className="sm:hidden" /> <span className="hidden text-slate-500 sm:inline">&amp;</span> SOC Analyst Candidate</motion.p>
          <motion.p {...fadeUp(0.26, reduceMotion)} className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{profile.headline}</motion.p>
          <motion.p {...fadeUp(0.34, reduceMotion)} className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{profile.description}</motion.p>
          <motion.div {...fadeUp(0.42, reduceMotion)} className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]">Explore Projects <span aria-hidden="true">→</span></Link>
          </motion.div>
          <motion.div {...fadeUp(0.5, reduceMotion)} className="mt-8"><SocialLinks /></motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="relative mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end">
          <div className="absolute -inset-2 rounded-full border-2 border-cyan-300/20" />
          <div className="absolute -inset-6 rounded-full border border-cyan-300/10" />
          <Image
            src={profile.profilePhoto}
            alt={`Profile photo of ${profile.name}`}
            width={500}
            height={500}
            className="relative aspect-square rounded-full border-2 border-cyan-300/30 bg-slate-900 object-cover shadow-2xl shadow-black/40"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
