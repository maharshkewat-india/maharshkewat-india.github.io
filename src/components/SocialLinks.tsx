import { profile } from '@/data/profile';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, WhatsAppIcon, XIcon } from './icons';

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const platforms = [
    { name: 'GitHub', href: profile.github, icon: GitHubIcon },
    { name: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon },
    { name: 'Instagram', href: profile.instagram, icon: InstagramIcon },
    { name: 'X', href: profile.twitter, icon: XIcon },
    { name: 'Facebook', href: profile.facebook, icon: FacebookIcon },
    { name: 'WhatsApp', href: `https://wa.me/91${profile.whatsapp}`, icon: WhatsAppIcon },
  ].filter(p => p.href && p.href !== '#');

  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const socialMenuRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        moreButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  if (!compact) {
    return (
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            className="group inline-flex items-center gap-2 rounded-md text-slate-400 transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Maharsh Kewat on ${platform.name}`}
          >
            <platform.icon className="h-6 w-6 fill-slate-400 transition group-hover:fill-slate-300" />
            <span className="text-sm font-medium">{platform.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Compact state: GitHub, LinkedIn, WhatsApp, More
  const visible = platforms.filter((p) => p.name === 'GitHub' || p.name === 'LinkedIn' || p.name === 'WhatsApp');
  return (
    <div ref={socialMenuRef} className="relative">
      <div className="flex items-center gap-2">
        {visible.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-[#080d15]/80 text-slate-400 transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Maharsh Kewat on ${platform.name}`}
          >
            <platform.icon className="h-4 w-4 fill-current" />
          </a>
        ))}

        <button
          type="button"
          ref={moreButtonRef}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="More social links"
          aria-haspopup="true"
          aria-controls="social-more-popup"
          className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-[#080d15]/80 text-slate-400 transition hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <circle cx="5" cy="12" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="19" cy="12" r="1.6" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="social-more-popup"
            role="group"
            aria-label="More social links"
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 grid w-[280px] grid-cols-3 gap-2 rounded-xl border border-cyan-300/20 bg-[#080d15]/98 p-3 shadow-2xl shadow-cyan-300/10 backdrop-blur-xl"
          >
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center gap-1.5 rounded-lg px-2 py-2.5 text-slate-400 transition hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label={`Visit Maharsh Kewat on ${platform.name}`}
              >
                <platform.icon className="h-4 w-4 fill-current" />
                <span className="text-[0.6rem] font-medium uppercase tracking-wider">{platform.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
