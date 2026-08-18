import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import { projects, Project } from '@/data/projects';
import { profile } from '@/data/profile';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{`${project.title} - ${profile.name}`}</title>
        <meta name="description" content={project.description} />
      </Head>
      <Navbar />
      <main className="bg-[#0B1018] pt-24">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/#projects" className="mb-8 inline-block text-sm font-semibold text-cyan-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              &larr; Back to All Projects
            </Link>

            <SectionHeading
              eyebrow={project.category}
              title={project.title}
              description={project.description}
            />

            <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-cyan-300">
                Key Features & Highlights
              </h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-cyan-300">
                Technologies Used
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-md bg-cyan-300 px-6 py-3 text-base font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1018]">
                View on GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectPageProps, IParams> = async (context) => {
  const { slug } = context.params!;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { notFound: true };
  return { props: { project } };
};

export default ProjectPage;