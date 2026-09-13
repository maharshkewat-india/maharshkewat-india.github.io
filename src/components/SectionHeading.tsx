import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  headingLevel?: 'h1' | 'h2';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', headingLevel = 'h2' }: SectionHeadingProps) {
  const centered = align === 'center';
  const Heading = headingLevel;

  return (
    <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300"><span className="mr-2 text-emerald-300">//</span>{eyebrow}</p>
      <Heading className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</Heading>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </motion.div>
  );
}
