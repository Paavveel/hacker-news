import axios from 'axios';
import { HttpException } from '../exceptions/HttpException';

const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

type GetPostsResponse = number[];

export const getPosts = async () => {
  try {
    const { data } = await api.get<GetPostsResponse>(`newstories.json`);
    return data.slice(0, 100);
  } catch (err) {
    if (err instanceof Error) {
      throw new HttpException(404, err.message);
    }
    throw new HttpException(404, 'Request failed');
  }
};
