import { Request, RequestHandler, Response } from "express";
import { getAllProjects } from '../services/projects.service';

export const getAllProjectsHandler: RequestHandler = async (req: Request, res: Response) => {
    res.json(getAllProjects());
}
