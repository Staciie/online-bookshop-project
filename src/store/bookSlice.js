/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LIMIT } from "../constants/limit";
import { bookHttpService } from "./bookHttpService";

export const bookAsync = createAsyncThunk(
  "book/fetch",
  async (_, { getState }) => {
    const state = getState();
    const { page } = state.book;
    const results = await bookHttpService.get(
      `/books?_page=${page}&_limit=${LIMIT}`
    );
    return results;
  }
);

const initialState = {
  list: [],
  showAddButton: true,
  page: 1,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    resetList: (state) => {
      state.page = 1;
      state.list = [];
    },
  },
  extraReducers: {
    [bookAsync.fulfilled]: (state, { payload }) => {
      state.list = [...state.list, ...payload];
      state.page += 1;
      state.showAddButton = payload.length === LIMIT;
    },
  },
});

export const { resetList, incrementPage } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
