/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

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
          payload.email === user.email && payload.password === user.password
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
