import { motion } from 'framer-motion';
import Terminal from '@/components/Terminal';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

const metaItems = [
  ['Current direction', 'Cybersecurity / SOC'],
  ['Approach', 'Learn · build · document'],
  ['Location', profile.location],
  ['Portfolio type', 'Student learning record'],
] as const;

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-x-clip border-b border-white/[0.06] bg-white/[0.01] section-py" aria-labelledby="about-title">
      <div className="container-max">
        <div className="mx-auto grid max-w-7xl gap-10 lg:gap-16 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="About"
              title="Learning with a defender&rsquo;s mindset."
              align="left"
            />
            <p id="about-title" className="mt-6 max-w-xl border-l border-cyan-300/25 pl-4 text-base leading-8 text-slate-400 sm:pl-5">
              {profile.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {metaItems.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                  className="group relative min-h-[7.25rem] overflow-hidden rounded-xl border border-white/10 bg-[#0b1018]/70 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-cyan-300/35 hover:bg-[#0d1620]/80"
                >
                  <span aria-hidden="true" className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-70" />
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200 transition-colors group-hover:text-white">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative min-w-0 lg:pt-4"
          >
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-300/[0.035] blur-3xl" />
            <div className="rounded-xl border border-cyan-300/10 bg-[#08111b]/30 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-2">
              <Terminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
