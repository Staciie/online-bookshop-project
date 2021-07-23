/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { bookHttpService } from "./bookHttpService";

export const bookAsync = createAsyncThunk("book/fetch", async () => {
  const results = await bookHttpService.get("/books");
  return results;
});

const initialState = {
  list: [],
  isLoading: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [bookAsync.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const bookReducer = bookSlice.reducer;
