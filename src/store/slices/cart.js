
import { createSlice } from "@reduxjs/toolkit";
import {  selectIsLoggedIn } from "./authSlice";
import {login,logout,isLoggedIn} from "./authSlice"
import instance from "../../axois/instance";
import { isExpired, decodeToken } from "react-jwt";
// import { useSelector } from "react-redux";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const { product, isLoggedIn } = action.payload;
      const { payload} = action;
      // const isLoggedIn = useSelector(selectIsLoggedIn);
      
      const newItem = payload;

      const existingItem = state.items.find(
        (item) => item?._id === newItem?._id
      );
      console.log(state.items)

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem?.price;

      // Save cart to local storage if user is not logged in
      if (!isLoggedIn) {
        const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

        const existingCartItem = existingCartData.items.find(item => item?._id === newItem?._id);

        if (existingCartItem) {
          existingCartItem.quantity++;
        } else {
          existingCartData.items.push({ ...newItem, quantity: 1 });
        }

        existingCartData.total += newItem?.price;

        localStorage.setItem("cart", JSON.stringify(existingCartData));
      }

      // Save cart items to database if user is logged in
      if (isLoggedIn) {
        alert("loged in")
        const selctitema={...newItem}
        console.log(selctitema._id)
        alert(selctitema)
        const token = localStorage.getItem('token');
        if (token) {
          const myDecodedToken = decodeToken(token);
          console.log(myDecodedToken);
          instance.post('cart/add',{customer_id:myDecodedToken.id,product_id:selctitema._id});

        } else {
          console.log('No token found in local storage');
        }
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const removedItemIndex = state.items.findIndex(
        (item) => item?._id === itemId
      );

      if (removedItemIndex !== -1) {
        const removedItem = state.items[removedItemIndex];
        state.total -= removedItem.price * removedItem.quantity;
        state.items.splice(removedItemIndex, 1);

        // Update local storage if the user is not logged in
        if (!selectIsLoggedIn(store.getState())) {
          const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };
          
          // Find and remove the item from local storage
          const updatedItems = existingCartData.items.filter(item => item?._id !== itemId);
          existingCartData.items = updatedItems;
          
          // Update the total price
          existingCartData.total = existingCartData.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
          }, 0);
          
          // Store the updated cart data back into local storage
          localStorage.setItem("cart", JSON.stringify(existingCartData));
        }

        // Remove item from database if the user is logged in
        if (selectIsLoggedIn(store.getState())) {
          axios.delete(`/api/cart/remove/${itemId}`);
        }
      }
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item?._id === itemId);

      if (existingItem) {
        const newQuantity = Math.min(quantity, existingItem.quantity);
        state.total +=
          (newQuantity - existingItem.quantity) * existingItem?.price;
        existingItem.quantity = newQuantity;

        if (!selectIsLoggedIn(store.getState())) {
          const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };
        
          const existingCartItem = existingCartData.items.find(item => item?._id === itemId);
          if (existingCartItem) {
            existingCartItem.quantity = Math.min(quantity, existingCartItem.quantity);
          }
        
          existingCartData.total = existingCartData.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
          }, 0);
        
          localStorage.setItem("cart", JSON.stringify(existingCartData));
        }

        // Update item quantity in database if the user is logged in
        if (selectIsLoggedIn(store.getState())) {
          axios.put(`/api/cart/update/${itemId}`, { quantity });
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

