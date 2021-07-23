/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      !existingItem
        ? (state.items.push({
            id: newItem.id,
          }),
          (state.quantity += 1))
        : ((state.items = state.items.filter((item) => item.id !== newItem.id)),
          (state.quantity -= 1));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
