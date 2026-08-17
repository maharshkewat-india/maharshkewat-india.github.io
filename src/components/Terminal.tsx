import { motion, useReducedMotion } from 'framer-motion';

const command = 'nmap -sV -p- --script=vuln 192.168.1.1';

const variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.01,
    },
  }),
};

export default function Terminal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl border border-cyan-300/20 bg-[#08111b]/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="p-5 font-mono text-sm text-slate-200">
        <span className="text-emerald-300">maharsh@security-lab</span>
        <span className="text-slate-500">:</span>
        <span className="text-cyan-300">~</span>
        <span className="text-slate-500">$ </span>
        <span className="inline-flex">
          {command.split('').map((char, i) => (
            <motion.span key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={reduceMotion ? {} : variants}>
              {char}
            </motion.span>
          ))}
        </span>
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-300" />
      </div>
    </motion.div>
  );
}