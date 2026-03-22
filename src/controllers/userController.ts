import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const service = new UserService();

export const listUsers = (req: Request, res: Response) => res.json(service.list());
export const createUser = (req: Request, res: Response) => {
  const user = service.create(req.body);
  res.status(201).json(user);
};