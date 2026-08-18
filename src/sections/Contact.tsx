import { useState, type FormEvent } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { SocialLinks } from '@/components/SocialLinks';
import { profile } from '@/data/profile';

export default function ContactSection() {
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null as string | null,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });
    const formData = new FormData(event.currentTarget);

    try {
      // IMPORTANT: Replace "YOUR_FORM_ID" with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xqpzyjdp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        (event.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        const errorMessage = data.errors?.map((e: { message: string }) => e.message).join(', ') || 'Something went wrong. Please try again.';
        setStatus({ submitting: false, succeeded: false, error: errorMessage });
      }
    } catch (error) {
      setStatus({ submitting: false, succeeded: false, error: 'An unexpected error occurred. Please check your network connection.' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1018] py-20 sm:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Me"
          description="Have a project in mind, a question, or just want to connect? Feel free to reach out!"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Contact Form */}
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-8 shadow-lg shadow-black/10">
            {status.succeeded ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <h3 className="font-mono text-lg font-semibold uppercase tracking-[0.1em] text-cyan-300">Message Sent!</h3>
                <p className="mt-4 text-slate-300">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 font-mono text-lg font-semibold uppercase tracking-[0.1em] text-cyan-300">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border border-slate-600/70 bg-[#06080d] px-4 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border border-slate-600/70 bg-[#06080d] px-4 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="mt-1 block w-full rounded-md border border-slate-600/70 bg-[#06080d] px-4 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-1 block w-full rounded-md border border-slate-600/70 bg-[#06080d] px-4 py-2 text-slate-100 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-300 px-6 py-3 text-base font-bold text-[#061018] shadow-sm transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-100 focus:ring-offset-2 focus:ring-offset-[#06080d] disabled:cursor-not-allowed disabled:bg-cyan-300/50"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {status.error && <p className="mt-4 text-sm text-rose-400">{status.error}</p>}
                </form>
              </>
            )}
          </div>

          {/* Contact Details and Social Links */}
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-8 shadow-lg shadow-black/10">
            <h3 className="font-mono text-lg font-semibold uppercase tracking-[0.1em] text-cyan-300 mb-6">Connect with Me</h3>
            <div className="space-y-6 text-slate-300">
              <p className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {profile.location}
              </p>
              <p className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${profile.email}`} className="hover:text-cyan-300 transition">{profile.email}</a>
              </p>
              <p className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.106l-1.412-.353a1.125 1.125 0 0 1-.924-.247l-.92-.92a1.125 1.125 0 0 0-1.635-.135L9.659 16.5l.655-.655a4.5 4.5 0 0 0 1.715 1.086c.319.091.675-.076.864-.407l.117-.118a.75.75 0 0 1 1.275-.096l3.03-2.979a.75.75 0 0 1 .096-1.275l-.118-.117a.868.868 0 0 0-.407-.864c-.439-.15-.89-.234-1.35-.264L12 10.5a4.5 4.5 0 0 0-1.086-1.715l-.655-.655a4.5 4.5 0 0 0-1.715-1.086c-.319-.091-.675.076-.864.407l-.117-.118a.75.75 0 0 1-1.275.096l-3.03 2.979a.75.75 0 0 1-.096 1.275Z" />
                </svg>
                <a href={`https://wa.me/91${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">WhatsApp: {profile.whatsapp}</a>
              </p>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
