import { Request, RequestHandler, Response } from "express";
import { getAllEnvironmentsForProject } from '../services/environments.service';

export const getEnvironmentsForProjectHandler: RequestHandler = async (req: Request, res: Response) => {
    const projectId = Number(req.params.projectId);

    res.json(getAllEnvironmentsForProject(projectId));
};