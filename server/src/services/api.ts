import axios from 'axios';
import DOMPurify from 'isomorphic-dompurify';
import { HttpException } from '../exceptions/HttpException';

const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getPosts = async () => {
  try {
    const { data } = await api.get(`newstories.json`);
    return data.slice(0, 100);
  } catch (err) {
    if (err instanceof Error) {
      throw new HttpException(404, err.message);
    }
    throw new HttpException(404, 'Request failed');
  }
};

export const getItem = async (id: string) => {
  try {
    const { data } = await api.get(`item/${id}.json`);
    const { type } = data;
    if (type === 'comment') {
      const cleanText = DOMPurify.sanitize(data.text);
      return { ...data, text: cleanText };
    }
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new HttpException(404, err.message);
    }
    throw new HttpException(404, 'Request failed');
  }
};

export const getTree = async (rootId: string) => {
  try {
    const item = await getItem(rootId);

    const { kids = [], id } = item;

    const children = await Promise.all(
      kids.map(async (id: number) => {
        return await getTree(id.toString());
      })
    );

    const childrenCount = children.reduce((acc, cur) => acc + cur.count, 0);

    return {
      id,
      kids: children,
      count: children.length + childrenCount,
    };
  } catch (err) {
    if (err instanceof Error) {
      throw new HttpException(404, err.message);
    }
    throw new HttpException(404, 'Request failed');
  }
};
