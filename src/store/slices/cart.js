
import { createSlice } from "@reduxjs/toolkit";
import { selectIsLoggedIn } from "./authSlice";

const initialState = {
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const { payload, isLoggedIn } = action;
      const newItem = payload;

      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item?._id === newItem?._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem?.price;

      // Update local storage only if user is not logged in
      if (!isLoggedIn) {
        // Retrieve existing cart data from local storage
        const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

        // Push the new item into the existing array
        existingCartData.items.push(newItem);

        // Store the updated array back into local storage
        localStorage.setItem("cart", JSON.stringify(existingCartData));
      }
    }
    ,
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItemIndex = state.items.findIndex(item => item?._id === itemId);
    
      if (removedItemIndex !== -1) {
        const removedItem = state.items[removedItemIndex];
        // Update the total price by subtracting the removed item's price
        state.total -= removedItem.price * removedItem.quantity;
        // Remove the item from the cart
        state.items.splice(removedItemIndex, 1);
    
        // Update local storage if the user is not logged in
        if (!selectIsLoggedIn(store.getState())) {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find(item => item?._id === itemId);
    
      if (existingItem) {
        // Ensure the quantity doesn't exceed the available stock
        const newQuantity = Math.min(quantity, existingItem.quantity);
        // Update the total price based on the change in quantity
        state.total += (newQuantity - existingItem.quantity) * existingItem?.price;
        existingItem.quantity = newQuantity;
    
        // Update local storage if the user is not logged in
        if (!selectIsLoggedIn(store.getState())) {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    }
    
  }
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
