import { Request, RequestHandler, Response } from "express";
import { getEnvironmentById } from '../services/environments.service';

export const getEnvironmentByIdHandler: RequestHandler = async (req: Request, res: Response) => {
    const environmentId = Number(req.params.environmentId);
    res.json(getEnvironmentById(environmentId));
};