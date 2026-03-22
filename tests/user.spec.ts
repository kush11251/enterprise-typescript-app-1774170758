import request from 'supertest';
import express from 'express';
import { setupUserRouter } from '../src/routes/userRoutes';

const app = express(); app.use(express.json()); app.use('/users', setupUserRouter());

it('GET /users returns list', async () => {
  const res = await request(app).get('/users');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});