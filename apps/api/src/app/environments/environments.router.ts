import * as express from 'express';
import {
    getEnvironmentByIdHandler,
    getEnvironmentsForProjectHandler,
    startEnvironmentHandler,
    stopEnvironmentHandler,
} from './handlers';

export const environmentsRouter = express.Router({mergeParams: true});

environmentsRouter.get('/', getEnvironmentsForProjectHandler)
environmentsRouter.get('/:environmentId', getEnvironmentByIdHandler)

environmentsRouter.get('/:environmentId/start', startEnvironmentHandler);
environmentsRouter.get('/:environmentId/stop', stopEnvironmentHandler);
