import { Request, RequestHandler, Response } from "express";
import { getEnvironmentById, startEnvironment } from '../services/environments.service';

export const startEnvironmentHandler: RequestHandler = async (req: Request, res: Response) => {
    const environmentId = Number(req.params.environmentId);

    const environment = getEnvironmentById(environmentId);

    if (!environment) {
        res.status(404).send('Environment could not be found.');
    }

    if (startEnvironment(environment)) {
        res.status(200).json(getEnvironmentById(environmentId));
    } else {
        res.status(500).json(getEnvironmentById(environmentId));
    }
};