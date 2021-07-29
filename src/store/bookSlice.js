/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LIMIT } from "../constants/limit";
import { bookHttpService } from "./bookHttpService";

export const bookAsync = createAsyncThunk(
  "book/fetch",
  async (additional, { getState }) => {
    const state = getState();
    const { page } = state.book;
    const { showFavorite } = state.ui;
    const { favorites } = state.book;
    let fetchLink = `/books?_page=${page}&_limit=${LIMIT}`;
    if (additional) fetchLink += `&title_like=${additional}`;
    if (showFavorite) fetchLink += `&id=${favorites.join("&id=")}`;
    const results = await bookHttpService.get(fetchLink);
    return results;
  }
);

const initialState = {
  list: [],
  showAddButton: true,
  favorites: [],
  isLoading: false,
  page: 1,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    resetStore: (state) => {
      state.list = [];
      state.showAddButton = true;
      state.favorites = [];
      state.isLoading = false;
      state.page = 1;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetList: (state) => {
      state.page = 1;
      state.list = [];
    },
    toggleAddToFavorites: (state, { payload }) => {
      const newFav = payload.id;
      const existingItem = state.favorites.find((item) => item === newFav);
      !existingItem
        ? state.favorites.push(newFav)
        : (state.favorites = state.favorites.filter((item) => item !== newFav));
    },
    showFavorites: (state) => {
      state.list = state.favorites;
    },
  },
  extraReducers: {
    [bookAsync.fulfilled]: (state, { payload }) => {
      state.list = [...state.list, ...payload];
      state.isLoading = false;
      state.page += 1;
      state.showAddButton = payload.length === LIMIT;
    },
    [bookAsync.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  resetList,
  incrementPage,
  toggleAddToFavorites,
  showFavorites,
  resetStore,
} = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
