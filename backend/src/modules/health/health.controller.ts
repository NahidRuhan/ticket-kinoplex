import type { Request, Response } from 'express';
import { healthService } from './health.service.ts';

export class HealthController {
  getHealth(_req: Request, res: Response): void {
    const health = healthService.check();
    res.status(200).json(health);
  }
}

export const healthController = new HealthController();
