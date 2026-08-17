import Link from 'next/link';
import { navItems, profile } from '@/data/profile';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-mono text-sm font-bold tracking-[0.16em] text-cyan-200">{profile.name.toUpperCase()}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Cybersecurity Student &amp; SOC Analyst Candidate.<br />Passionate about Network Security, Incident Response, IAM, and Cloud Security.</p>
          <div className="mt-5"><SocialLinks /></div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4 md:grid-cols-2">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="text-xs font-semibold tracking-[0.12em] text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{item.label}</Link>)}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Maharsh Kewat. Built as a learning portfolio.</div>
    </footer>
  );
}
