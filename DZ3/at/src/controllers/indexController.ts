import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

export const showIndexHandler = async (req: Request, res: Response) => {
  res.render('index');
}

export default router;
