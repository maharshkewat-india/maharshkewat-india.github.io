import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics?: string[];
}

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubData {
  repositories: GitHubRepository[];
  profile: GitHubProfile | null;
}

const GITHUB_API = 'https://api.github.com';
const REPOSITORY_LIMIT = 6;
const relevanceTerms = ['cyber', 'security', 'soc', 'network', 'forensic', 'incident', 'threat', 'sentinel', 'ai', 'python', 'streamlit', 'fastapi'];

function getRepositoryRelevance(repository: GitHubRepository): number {
  const searchableText = [repository.name, repository.description ?? '', repository.language ?? '', ...(repository.topics ?? [])].join(' ').toLowerCase();
  return relevanceTerms.reduce((score, term) => score + (searchableText.includes(term) ? 1 : 0), repository.description ? 1 : 0);
}

function getRelevantRepositories(repositories: GitHubRepository[]): GitHubRepository[] {
  return repositories
    .filter((repository) => !repository.fork)
    .map((repository) => ({ repository, relevance: getRepositoryRelevance(repository) }))
    .filter(({ relevance }) => relevance >= 2)
    .sort((left, right) => right.relevance - left.relevance || new Date(right.repository.updated_at).getTime() - new Date(left.repository.updated_at).getTime())
    .slice(0, REPOSITORY_LIMIT)
    .map(({ repository }) => repository);
}

function formatUpdatedDate(updatedAt: string): string {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(updatedAt));
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'GitHub data is temporarily unavailable.';
}

export default function GitHub() {
  const reduceMotion = useReducedMotion();
  const [data, setData] = useState<GitHubData>({ repositories: [], profile: null });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadGitHubData = async (): Promise<void> => {
      try {
        const headers = { Accept: 'application/vnd.github+json' };
        const [repositoriesResponse, profileResponse] = await Promise.all([
          fetch(`${GITHUB_API}/users/${profile.github.split('/').pop()}/repos?per_page=100&sort=updated`, { headers, signal: controller.signal }),
          fetch(`${GITHUB_API}/users/${profile.github.split('/').pop()}`, { headers, signal: controller.signal }),
        ]);

        if (!repositoriesResponse.ok || !profileResponse.ok) {
          throw new Error('GitHub data is temporarily unavailable.');
        }

        const repositories = await repositoriesResponse.json() as GitHubRepository[];
        const githubProfile = await profileResponse.json() as GitHubProfile;
        setData({ repositories: getRelevantRepositories(repositories), profile: githubProfile });
        setError(null);
      } catch (loadError: unknown) {
        if (loadError instanceof DOMException && loadError.name === 'AbortError') return;
        setError(getErrorMessage(loadError));
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    void loadGitHubData();
    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="scroll-mt-20 border-y border-white/10 bg-white/[0.015] py-20 sm:py-28" aria-labelledby="github-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="GitHub" title="Latest GitHub Projects" description="Public repositories selected from my GitHub profile and filtered for cybersecurity and technical relevance." />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-md border border-cyan-300/35 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">@maharshkewat-india ↗<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <h2 id="github-title" className="sr-only">Latest GitHub Projects</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-xl">
          <ActivityStat label="Public repositories" value={isLoading ? '...' : data.profile?.public_repos ?? '—'} />
          <ActivityStat label="Followers" value={isLoading ? '...' : data.profile?.followers ?? '—'} />
          <ActivityStat label="Following" value={isLoading ? '...' : data.profile?.following ?? '—'} />
        </div>

        {isLoading && <LoadingState />}
        {!isLoading && error && <FallbackState message={error} />}
        {!isLoading && !error && data.repositories.length === 0 && <FallbackState message="No relevant public repositories were found." />}
        {!isLoading && !error && data.repositories.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.repositories.map((repository, index) => (
              <motion.article key={repository.id} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.04 }} className="flex h-full flex-col rounded-xl border border-white/10 bg-[#091018]/60 p-5 transition hover:border-cyan-300/30 sm:p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-cyan-300">{repository.language ?? 'Technical project'}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{repository.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{repository.description ?? 'Public repository from the GitHub profile.'}</p>
                <p className="mt-4 text-xs text-slate-500">Updated {formatUpdatedDate(repository.updated_at)}</p>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-[#061018] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d]">View on GitHub <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ActivityStat({ label, value }: { label: string; value: number | string }) {
  return <div className="rounded-lg border border-white/10 bg-black/20 p-4"><p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-slate-500">{label}</p><p className="mt-2 text-2xl font-semibold text-white">{value}</p></div>;
}

function LoadingState() {
  return <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.025] p-6 text-sm text-slate-400" role="status">Loading public GitHub projects...</div>;
}

function FallbackState({ message }: { message: string }) {
  return <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.025] p-6 text-sm text-slate-400"><p>{message}</p><a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-cyan-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View GitHub profile ↗<span className="sr-only"> (opens in a new tab)</span></a></div>;
}