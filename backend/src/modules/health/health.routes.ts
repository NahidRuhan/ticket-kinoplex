import { Router } from 'express';
import { healthController } from './health.controller.ts';

const healthRouter = Router();

healthRouter.get('/', (req, res) => healthController.getHealth(req, res));

export default healthRouter;
