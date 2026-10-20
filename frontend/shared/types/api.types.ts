export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  results?: number;
  message?: string;
}

export interface HealthCheckResponse {
  status: 'ok' | 'degraded';
  uptime: number;
  timestamp: string;
  service: string;
}
