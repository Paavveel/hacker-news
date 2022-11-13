import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IItem, TPostsList } from '../types';

const BASE_URL = 'http://localhost:3500';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getItem: build.query<IItem, number>({
      query: (id) => ({
        url: '/item',
        params: {
          id,
        },
      }),
    }),
    getPostsList: build.query<TPostsList, void>({
      query: () => ({
        url: '/posts',
      }),
    }),
    getPostWithComments: build.query<IItem, number>({
      query: (id) => ({
        url: '/post',
        params: {
          id,
        },
      }),
    }),
  }),
});

export const {
  useGetItemQuery,
  useGetPostsListQuery,
  useGetPostWithCommentsQuery,
} = newsApi;
