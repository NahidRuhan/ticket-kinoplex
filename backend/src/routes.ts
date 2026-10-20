import { Router } from 'express';
import healthRouter from './modules/health/health.routes.ts';
import movieRouter from './modules/movies/movie.routes.ts';

const appRouter = Router();

appRouter.use('/health', healthRouter);
appRouter.use('/movies', movieRouter);

export default appRouter;
