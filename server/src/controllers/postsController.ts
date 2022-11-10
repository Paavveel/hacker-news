import { Request, Response } from 'express';
import { getPosts } from '../services/api';

export const getPostsController = async (req: Request, res: Response) => {
  try {
    const data = await getPosts();
    res.send(data?.slice(0, 100));
  } catch (err) {
    throw err;
  }
};
