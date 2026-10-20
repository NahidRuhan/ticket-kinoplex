import { Suspense } from 'react';
import { apiClient } from '@/shared/lib/api-client';
import type { HealthCheckResponse } from '@/shared/types/api.types';
import { movieApi } from '@/features/movies/services/movieApi';
import { MovieList } from '@/features/movies/components/MovieList';

async function HealthIndicator() {
  const health = await apiClient<HealthCheckResponse>('/health').catch(() => null);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          health?.status === 'ok' ? 'bg-emerald-500' : 'bg-amber-500'
        }`}
      />
      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
        Backend:{' '}
        {health?.status === 'ok'
          ? `Online (${health.service})`
          : 'Offline (Start backend: npm run dev)'}
      </span>
    </div>
  );
}

async function MovieSection() {
  const movies = await movieApi.getAll().catch(() => []);
  return <MovieList movies={movies} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Ticket Kinoplex</h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Frontend &amp; Backend Modular Architecture Starter
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-xs text-zinc-400">Checking backend...</div>
            }
          >
            <HealthIndicator />
          </Suspense>
        </header>

        {/* Feature: Movies */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Movies Module</h2>
            <span className="text-xs text-zinc-500">
              Loaded via <code className="font-mono">movieApi.getAll()</code>
            </span>
          </div>

          <Suspense
            fallback={
              <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">
                Loading movies...
              </div>
            }
          >
            <MovieSection />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
