import Link from 'next/link';
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
            <a href="/Maharsh_Kewat_Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md border border-slate-600/70 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View Resume</a>
          </motion.div>
          <motion.div {...fadeUp(0.5, reduceMotion)} className="mt-8"><SocialLinks /></motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="absolute -inset-2 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.025]" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl border border-cyan-300/20 bg-[#08111b]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-400"><span>Security profile</span><span className="flex items-center gap-2 text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Learning active</span></div>
            <div className="space-y-5 p-6">
              {[['PRIMARY', 'Cybersecurity / SOC'], ['FOCUS', 'Network Security · IAM'], ['ENVIRONMENT', 'Cloud · AI · Digital Forensics']].map(([label, value]) => <div key={label} className="border-l border-cyan-300/30 pl-4"><p className="font-mono text-[0.63rem] font-semibold tracking-[0.16em] text-slate-500">{label}</p><p className="mt-1 text-sm font-medium text-slate-200">{value}</p></div>)}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">{['Monitor', 'Analyze', 'Learn'].map((label) => <div key={label} className="rounded border border-white/10 bg-white/[0.03] px-2 py-3 text-center font-mono text-[0.62rem] uppercase tracking-[0.09em] text-cyan-100">{label}</div>)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
