import express from 'express';
import { setupUserRouter } from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/users', setupUserRouter());

app.get('/status', (req, res) => res.send({ status: 'ok'}));

app.listen(5000, () => console.log('enterprise-ts started on 5000'));