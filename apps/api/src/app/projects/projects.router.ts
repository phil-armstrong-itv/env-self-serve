import * as express from 'express';
import { getAllProjectsHandler, getProjectHandler } from './handlers';
import { environmentsRouter } from '../environments/environments.router';

export const projectsRouter = express.Router();

projectsRouter.get('/', getAllProjectsHandler);

projectsRouter.get('/:projectId', getProjectHandler);

projectsRouter.use('/:projectId/environments', environmentsRouter);