/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { history } from "./history";
import { bookHttpService } from "./bookHttpService";

export const checkoutAsync = createAsyncThunk(
  "checkout/fetch",
  async (payload) => {
    const results = await bookHttpService.post("/checkouts", payload);
    return results.ok;
  }
);

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleAddToCart: (state, { payload }) => {
      const newItem = payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      !existingItem
        ? (state.items.push({
            id: newItem.id,
            price: newItem.price,
            totalPrice: newItem.price,
            count: 1,
          }),
          (state.quantity += 1))
        : ((state.items = state.items.filter((item) => item.id !== newItem.id)),
          (state.quantity -= 1));
    },
    incrememtCount: (state, { payload }) => {
      const CurrItem = state.items.find((item) => item.id === payload);
      CurrItem.count += 1;
      CurrItem.totalPrice += CurrItem.price;
    },
    decrememtCount: (state, { payload }) => {
      const CurrItem = state.items.find((item) => item.id === payload);
      CurrItem.count === 1
        ? ((state.items = state.items.filter(
            (item) => item.id !== CurrItem.id
          )),
          (state.quantity -= 1))
        : ((CurrItem.count -= 1), (CurrItem.totalPrice -= CurrItem.price));
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.quantity -= 1;
    },
    emptyCart: (state) => {
      state.quantity = 0;
      state.items = [];
    },
  },
  extraReducers: {
    [checkoutAsync.fulfilled]: (state) => {
      state.items = [];
      state.quantity = 0;
      history.push("/books");
    },
  },
});

export const {
  toggleAddToCart,
  incrememtCount,
  decrememtCount,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
