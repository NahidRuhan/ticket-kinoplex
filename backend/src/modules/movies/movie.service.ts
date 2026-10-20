import type { Movie } from './movie.types.ts';
import { AppError } from '../../shared/errors/appError.ts';

export class MovieService {
  private movies: Movie[] = [
    {
      id: '1',
      title: 'Dune: Part Two',
      genre: ['Sci-Fi', 'Adventure'],
      durationMinutes: 166,
      rating: 'PG-13',
      synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.',
    },
    {
      id: '2',
      title: 'Spider-Man: Across the Spider-Verse',
      genre: ['Animation', 'Action', 'Adventure'],
      durationMinutes: 140,
      rating: 'PG',
      synopsis: 'Miles Morales catapults across the Multiverse, encountering a team of Spider-People.',
    },
  ];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): Movie {
    const movie = this.movies.find((m) => m.id === id);
    if (!movie) {
      throw new AppError(`Movie with id ${id} not found`, 404);
    }
    return movie;
  }
}

export const movieService = new MovieService();
