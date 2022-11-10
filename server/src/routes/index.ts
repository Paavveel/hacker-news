import express from 'express';
import { getPostsController } from '../controllers/postsController';

export const router = express.Router();

router.get('/posts', getPostsController);

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Not found' });
});
