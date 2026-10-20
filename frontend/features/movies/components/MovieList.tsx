import type { Movie } from '../types/movie.types';

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        No movies available at the moment.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {movies.map((movie) => (
        <article
          key={movie.id}
          className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 shadow-xs transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                {movie.title}
              </h3>
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {movie.rating}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {movie.synopsis}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <span>{movie.durationMinutes} min</span>
            <div className="flex flex-wrap gap-1">
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
