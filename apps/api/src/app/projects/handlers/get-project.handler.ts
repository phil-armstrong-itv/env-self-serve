import { Request, RequestHandler, Response } from "express";
import { getProject } from '../services/projects.service';

export const getProjectHandler: RequestHandler = async (req: Request, res: Response) => {
    const id = Number(req.params.projectId);
    res.json(getProject(id));
};