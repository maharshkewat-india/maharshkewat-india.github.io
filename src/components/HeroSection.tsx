import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/profile';
import { SocialLinks } from '@/components/SocialLinks';
import ResumeButton from '@/components/ResumeButton';

const fadeUp = (delay: number) => ({
  initial: false,
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 pt-16 sm:pt-20"
      aria-labelledby="hero-title"
    >
      {/* Animated background blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-0 cyber-grid animate-blob-float opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-24 h-56 w-56 animate-blob-float rounded-full bg-cyan-400/[0.06] blur-3xl"
        style={{ animationDuration: '6s' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[10%] h-72 w-72 animate-blob-float rounded-full bg-emerald-400/[0.06] blur-3xl"
        style={{ animationDuration: '7s', animationDirection: 'reverse' }}
      />
      {/* Floating decorative dots */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {[['left-[8%] top-[29%]', 'h-2 w-2'], ['left-[22%] top-[68%]', 'h-1.5 w-1.5'], ['right-[16%] top-[27%]', 'h-2 w-2'], ['right-[27%] bottom-[22%]', 'h-1.5 w-1.5']].map(
          ([position, size], index) => (
            <motion.span
              key={position}
              className={`absolute rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.9)] ${position} ${size}`}
              animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
              transition={{
                duration: 2.8 + index * 0.4,
                repeat: Infinity,
                ease: 'ease-in-out',
              }}
            />
          )
        )}
      </div>

      <div
        className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-24 lg:min-h-[680px] lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28"
      >
        <div className="max-w-xl">
          <motion.p
            {...fadeUp(0)}
            className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300"
          >
            <span className="mr-2 text-emerald-300">●</span>
            Security operations · learning portfolio
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            id="hero-title"
            className="max-w-[12ch] font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] text-white sm:max-w-none sm:text-6xl sm:tracking-[-0.04em] xl:text-[4.25rem]"
          >
            MAHARSH <span className="text-gradient">KEWAT</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-5 max-w-xl text-base font-medium uppercase leading-7 tracking-[0.1em] text-cyan-100 sm:text-lg"
          >
            Cybersecurity Student<br className="sm:hidden" /> <span className="hidden text-slate-500 sm:inline">&</span> SOC Analyst Candidate
          </motion.p>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-5 max-w-lg text-base leading-7 text-slate-300"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            {...fadeUp(0.34)}
            className="mt-5 max-w-lg text-base leading-7 text-slate-400"
          >
            {profile.description}
          </motion.p>

          <motion.div
            {...fadeUp(0.42)}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="
                rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-[#061018]
                transition hover:bg-cyan-200 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2
                focus-visible:ring-offset-[#06080d]
              "
            >
              Explore Projects <span aria-hidden="true">→</span>
            </Link>
            <ResumeButton variant="secondary" label="Download Resume" />
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-7">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="relative mx-auto aspect-square w-full max-w-[17rem] min-w-0 sm:max-w-sm lg:max-w-[25rem] lg:justify-self-end"
        >
          <Image
            src={profile.profilePhoto}
            alt={`Profile photo of ${profile.name}`}
            fill
            sizes="(max-width: 639px) 17rem, (max-width: 1023px) 24rem, 25rem"
            quality={90}
            className="
              rounded-full border border-cyan-200/65 bg-slate-900 object-cover object-top
              shadow-[0_0_18px_rgba(34,211,238,0.12),0_16px_36px_rgba(0,0,0,0.32)]
            "
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
