/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HttpService } from "../HttpService/HttpService";
import { history } from "./history";

const bookHttpService = new HttpService(" http://localhost:3004", history);

const initialState = {
  list: [],
  isLoading: false,
};

export const bookAsync = createAsyncThunk("book/fetch", async () => {
  const results = await bookHttpService.get("/books");
  return results;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [bookAsync.fulfilled]: (state, { payload }) => {
      state.list = [...state.list, ...payload];
    },
  },
});

export const bookReducer = bookSlice.reducer;
