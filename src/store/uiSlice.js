/* eslint-disable no-param-reassign */
import { StaticDatePicker } from "@material-ui/lab";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    incrementPage: () => {
      StaticDatePicker.page += 1;
    },
  },
});

export const bookReducer = uiSlice.reducer;
