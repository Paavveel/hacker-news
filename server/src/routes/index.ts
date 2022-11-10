import express from 'express';
import {
  getPostController,
  getPostsController,
  getPostWithCommentsController,
} from '../controllers';

export const router = express.Router();

router.get('/posts', getPostsController);
router.get('/post', getPostWithCommentsController);
router.get('/item', getPostController);

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Not found' });
});
