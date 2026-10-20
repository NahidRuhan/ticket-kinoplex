import type { Request, Response } from 'express';
import { movieService } from './movie.service.ts';
import { AppError } from '../../shared/errors/appError.ts';

export class MovieController {
  getMovies(_req: Request, res: Response): void {
    const movies = movieService.getAllMovies();
    res.status(200).json({
      status: 'success',
      results: movies.length,
      data: movies,
    });
  }

  getMovieById(req: Request, res: Response): void {
    const id = req.params.id;
    if (typeof id !== 'string') {
      throw new AppError('Invalid movie ID', 400);
    }

    const movie = movieService.getMovieById(id);
    res.status(200).json({
      status: 'success',
      data: movie,
    });
  }
}

export const movieController = new MovieController();
