// slices/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(action.payload);
      const existingItem = state.items.find(item => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem.price;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItem = state.items.find(item => item._id=== itemId);

      if (removedItem) {
        state.total -= removedItem.price * removedItem.quantity;
        state.items = state.items.filter(item => item._id !== itemId);
      }
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find(item => item._id === itemId);

      if (existingItem) {
        state.total += (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
    }
  }
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
