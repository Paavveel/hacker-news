import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface INewsInitialState {
  page: number;
  posts: number[];
}

const initialState: INewsInitialState = {
  page: 1,
  posts: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const selectPage = (state: RootState) => state.news.page;
export const selectPosts = (state: RootState) => state.news.posts;

export const { incrementPage } = newsSlice.actions;

export default newsSlice.reducer;
