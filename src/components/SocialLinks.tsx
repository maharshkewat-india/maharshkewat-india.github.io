import { profile } from '@/data/profile';
import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, WhatsAppIcon, XIcon } from './icons';

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const socialPlatforms = [
    { name: 'GitHub', href: profile.github, icon: GitHubIcon },
    { name: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon },
    { name: 'Instagram', href: profile.instagram, icon: InstagramIcon },
    { name: 'X', href: profile.twitter, icon: XIcon },
    { name: 'Facebook', href: profile.facebook, icon: FacebookIcon },
    { name: 'WhatsApp', href: `https://wa.me/91${profile.whatsapp}`, icon: WhatsAppIcon },
  ].filter(p => p.href && p.href !== '#'); // Filter out links that are not set

  const labelClass = compact ? 'sr-only' : 'text-sm font-medium';
  const iconSize = compact ? 'h-5 w-5' : 'h-6 w-6';

  return (
    <div className={`flex items-center ${compact ? 'gap-4' : 'gap-x-6'}`}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          className="group inline-flex items-center gap-2 rounded-md text-slate-400 transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Maharsh Kewat on ${platform.name}`}
        >
          <platform.icon className={`${iconSize} fill-slate-400 transition group-hover:fill-slate-300`} />
          <span className={labelClass}>{platform.name}</span>
        </a>
      ))}
    </div>
  );
}