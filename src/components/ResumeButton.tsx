import { motion, useReducedMotion } from 'framer-motion';
import { resume } from '@/data/resume';

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary';
  label?: string;
  showIcon?: boolean;
}

// Reusable download-resume button.
// Renders an <a> tag with the `download` attribute pointing at the PDF stored
// in `public/`. Falls back to opening in a new tab if the file is missing.
export default function ResumeButton({
  variant = 'primary',
  label = 'Download Resume',
  showIcon = true,
}: ResumeButtonProps) {
  const reduceMotion = useReducedMotion();

  const base =
    'inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]';
  const styles =
    variant === 'primary'
      ? 'bg-cyan-300 text-[#061018] hover:bg-cyan-200'
      : 'border border-cyan-300/35 text-cyan-100 hover:bg-cyan-300/10';

  return (
    <motion.a
      href={resume.pdfUrl}
      download={resume.pdfFileName}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      )}
      {label}
    </motion.a>
  );
}
