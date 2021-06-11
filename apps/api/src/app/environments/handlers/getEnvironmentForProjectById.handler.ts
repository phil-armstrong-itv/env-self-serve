import { Request, RequestHandler, Response } from "express";
import { getEnvironmentById } from '../services/environments.service';

export const getEnvironmentByIdHandler: RequestHandler = async (req: Request, res: Response) => {
    const projectId = Number(req.params.projectId);
    res.json(getEnvironmentById(projectId));
};