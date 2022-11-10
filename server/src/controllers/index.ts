import { NextFunction, Request, Response } from 'express';
import { getItem, getPosts, getTree } from '../services/api';

type RequestWithQuery<T> = Request<{}, {}, {}, T>;

type PostQuery = {
  id: string;
};

export const getPostsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postsIds = await getPosts();
    res.send(postsIds);
  } catch (err) {
    next(err);
  }
};

export const getPostController = async (
  req: RequestWithQuery<PostQuery>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.query;
  try {
    const post = await getItem(id);
    res.send(post);
  } catch (err) {
    next(err);
  }
};

export const getPostWithCommentsController = async (
  req: RequestWithQuery<PostQuery>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.query;

  try {
    const post = await getItem(id);
    const { kids, count } = await getTree(id);
    res.send({
      ...post,
      kids,
    });
  } catch (err) {
    next(err);
  }
};
