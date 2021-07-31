/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { history } from "./history";
import { USERS } from "../constants/LoginValidation";

const initialState = {
  showFavorite: false,
  isAuthenticated: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeSort: (state) => {
      state.showFavorite = !state.showFavorite;
    },
    login: (state, { payload }) => {
      state.isAuthenticated = USERS.some(
        (user) =>
          payload.values.email === user.email &&
          payload.values.password === user.password
      );
      state.isAuthenticated ? history.push("/books") : payload.setOpen(true);
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, changeSort } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
