import { NextFunction, Request, Response } from 'express';
import { getPosts } from '../services/api';

export const getPostsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (err) {
    next(err);
  }
};
