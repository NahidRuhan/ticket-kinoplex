import { Router } from 'express';
import { movieController } from './movie.controller.ts';

const movieRouter = Router();

movieRouter.get('/', (req, res) => movieController.getMovies(req, res));
movieRouter.get('/:id', (req, res) => movieController.getMovieById(req, res));

export default movieRouter;
