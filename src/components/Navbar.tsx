import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navItems, profile } from '@/data/profile';
import { SocialLinks } from './SocialLinks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  const isCurrent = (href: string) => href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'border-cyan-300/15 bg-[#06080d]/90 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'border-transparent bg-[#06080d]/50 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="relative z-50 font-mono text-sm font-bold tracking-[0.16em] text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:text-base">
          <span className="text-cyan-400">MK</span><span className="hidden sm:inline"> / SECURITY LAB</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`text-[0.69rem] font-semibold tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${isCurrent(item.href) ? 'text-cyan-200' : 'text-slate-400 hover:text-white'}`} aria-current={isCurrent(item.href) ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block"><SocialLinks compact /></div>

        <button type="button" className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/20 text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <motion.span className="h-px w-full bg-current" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.18 }} />
            <motion.span className="h-px w-full bg-current" animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.18 }} />
            <motion.span className="h-px w-full bg-current" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.18 }} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -12 }} transition={{ duration: 0.18 }} className="absolute inset-x-0 top-16 border-b border-cyan-300/15 bg-[#080d15]/98 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`rounded-md px-3 py-3 text-sm font-semibold tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${isCurrent(item.href) ? 'bg-cyan-300/10 text-cyan-100' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-white/10 px-3 pt-5"><SocialLinks /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
