import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();
  const centered = align === 'center';

  return (
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300"><span className="mr-2 text-emerald-300">//</span>{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </motion.div>
  );
}
