import { createSlice } from "@reduxjs/toolkit";
import { selectIsLoggedIn } from "./authSlice";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const { payload, isLoggedIn } = action;
      const newItem = payload;

      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item?._id === newItem?._id
      );
      console.log(item);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem?.price;

      
if (!isLoggedIn) {
  // Retrieve existing cart data from local storage
  const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

  // Check if the item already exists in the existing cart data
  const existingCartItem = existingCartData.items.find(item => item?._id === newItem?._id);

  if (existingCartItem) {
    // If the item exists, update its quantity
    existingCartItem.quantity++;
  } else {
    // If the item doesn't exist, add it to the cart
    existingCartData.items.push({ ...newItem, quantity: 1 });
  }

  // Update the total price
  existingCartData.total += newItem?.price;

  // Store the updated cart data back into local storage
  localStorage.setItem("cart", JSON.stringify(existingCartData));
}

    }
    ,
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItemIndex = state.items.findIndex(
        (item) => item?._id === itemId
      );

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
      const existingItem = state.items.find((item) => item?._id === itemId);

      if (existingItem) {
        // Ensure the quantity doesn't exceed the available stock
        const newQuantity = Math.min(quantity, existingItem.quantity);
        // Update the total price based on the change in quantity
        state.total +=
          (newQuantity - existingItem.quantity) * existingItem?.price;
        existingItem.quantity = newQuantity;

        // Update local storage if the user is not logged in
        // if (!selectIsLoggedIn(store.getState())) {
        //   localStorage.setItem("cart", JSON.stringify(state));
        // }
        if (!selectIsLoggedIn(store.getState())) {
          // Retrieve existing cart data from local storage
          const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };
        
          // Update the quantity of the item in the cart
          const existingCartItem = existingCartData.items.find(item => item?._id === itemId);
          if (existingCartItem) {
            // Ensure the quantity doesn't exceed the available stock
            existingCartItem.quantity = Math.min(quantity, existingCartItem.quantity);
          }
        
          // Update the total price
          existingCartData.total = existingCartData.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
          }, 0);
        
          // Store the updated cart data back into local storage
          localStorage.setItem("cart", JSON.stringify(existingCartData));
      }
    }
    
  },
}
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
