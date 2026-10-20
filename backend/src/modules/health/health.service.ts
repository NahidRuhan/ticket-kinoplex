export interface HealthResponse {
  status: 'ok' | 'degraded';
  uptime: number;
  timestamp: string;
  service: string;
}

export class HealthService {
  check(): HealthResponse {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'ticket-kinoplex-api',
    };
  }
}

export const healthService = new HealthService();
