import { Router } from 'express';
import { listUsers, createUser } from '../controllers/userController';

export function setupUserRouter() {
  const router = Router();
  router.get('/', listUsers);
  router.post('/', createUser);
  return router;
}