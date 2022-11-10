import axios from 'axios';

const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

type GetPostsResponse = number[];

export const getPosts = async () => {
  try {
    const { data } = await api.get<GetPostsResponse>(`newstories.json`);
    return data;
  } catch (err) {}
};
