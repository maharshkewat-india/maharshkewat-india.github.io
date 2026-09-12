import { motion, useReducedMotion } from 'framer-motion';

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="relative rounded-xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-8"
    >
      {/* Decorative blob background */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 blur-3xl"
        style={{ animation: reduceMotion ? 'none' : 'blobFloat 6s ease-in-out infinite alternate' }}
      />

      <div className="relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.12em] text-cyan-200"
        >
          <span className="text-emerald-300">●</span>
          Cybersecurity Learning
        </motion.div>

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-base leading-7 text-slate-300"
        >
          I am a B.Tech CSE (Cyber Security) student developing practical foundations in network security,
          incident response, identity and access management, cloud security and AI-enabled systems. This
          portfolio documents learning, training and project work — not professional SOC employment.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ['Current direction', 'Cybersecurity / SOC'],
            ['Approach', 'Learn · build · document'],
            ['Location', 'Satna, Madhya Pradesh'],
            ['Portfolio type', 'Student learning record'],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="rounded-lg border border-white/10 bg-black/20 p-4 transition hover:border-cyan-300/30 hover:bg-black/30"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-cyan-300">{label}</p>
              <p className="mt-2 text-sm text-slate-200">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}