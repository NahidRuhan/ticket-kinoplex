import app from './app.ts';
import { env } from './config/env.ts';

const server = app.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT} in ${env.NODE_ENV} mode`);
});

// Graceful shutdown handling
const shutdown = (signal: string) => {
  console.log(`\nReceived ${signal}. Gracefully shutting down...`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
