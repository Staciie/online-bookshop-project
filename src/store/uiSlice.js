/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFavorite: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeSort: (state) => {
      state.showFavorite = !state.showFavorite;
    },
  },
});

export const { changeSort } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
