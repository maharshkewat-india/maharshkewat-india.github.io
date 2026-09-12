import { motion, useReducedMotion } from 'framer-motion';
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
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 section-py" aria-labelledby="about-title">
      <div className="container-max">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="About"
              title="Learning with a defender&rsquo;s mindset."
              align="left"
            />
            <p id="about-title" className="mt-6 text-base leading-8 text-slate-400">
              {profile.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metaItems.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                  className="glass-card p-5 group"
                >
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-cyan-300">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-slate-200 group-hover:text-white transition-colors">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}