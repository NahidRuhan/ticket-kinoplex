import express from 'express';
import cors from 'cors';
import { env } from './config/env.ts';
import appRouter from './routes.ts';
import { errorHandler } from './shared/middleware/errorHandler.ts';
import { notFoundHandler } from './shared/middleware/notFoundHandler.ts';

const app = express();

// Global Middlewares
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (_req, res) => {
  res.json({
    name: 'Ticket Kinoplex API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      movies: '/api/movies',
    },
  });
});

// Modular API Routes
app.use('/api', appRouter);

// 404 & Centralized Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
