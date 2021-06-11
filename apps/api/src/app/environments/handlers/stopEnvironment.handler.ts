import { Request, RequestHandler, Response } from "express";
import { getEnvironmentById, stopEnvironment } from '../services/environments.service';

export const stopEnvironmentHandler: RequestHandler = async (req: Request, res: Response) => {
    const environmentId = Number(req.params.environmentId);

    const environment = getEnvironmentById(environmentId);

    if (!environment) {
        res.status(404).send('Environment could not be found.');
    }

    if (stopEnvironment(environment)) {
        res.status(200).json(getEnvironmentById(environmentId));
    } else {
        res.status(500).json(getEnvironmentById(environmentId));
    }
};