/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

import { history } from "./history";
import { USERS } from "../constants/LoginValidation";

const initialState = {
  isAuthenticated: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
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

export const { login, logout } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
