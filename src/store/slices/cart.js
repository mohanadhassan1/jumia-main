
import { createSlice } from "@reduxjs/toolkit";
import {  selectIsLoggedIn } from "./authSlice";
import {login,logout,isLoggedIn} from "./authSlice"
import instance from "../../axois/instance";
import { isExpired, decodeToken } from "react-jwt";
import { useSelector } from "react-redux";
import axios from "axios";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItemToCart(state, action) {
      const { payload} = action;
      const isLoggedIn = selectIsLoggedIn;
      
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

      if (isLoggedIn) {
        // alert("Logged in");
        const selctitema = { ...newItem };
        console.log(selctitema._id);
        // alert(selctitema);
        const token = localStorage.getItem('token');
        if (token) {
          const myDecodedToken = decodeToken(token);
          instance.get(`cart/${myDecodedToken.id}`)
            .then(response => {
              console.log(response.data); 
              const cartItems = response.data.cartItems;
              console.log(cartItems);
              const productIds = cartItems.map(item => item.product_id);
              console.log(productIds);
      
              const existingproduct = productIds.find(id => id == selctitema._id);
              console.log(existingproduct);
      
              if (!existingproduct) {
                // If the product does not exist in the cart, add it
                instance.post('cart/add', { customer_id: myDecodedToken.id, product_id: selctitema._id, quantity: 1 });
              } else {
                // If the product already exists in the cart, you may want to handle this case
                console.log('Product already exists in the cart.');
              }
            })
            .catch(error => {
              console.error('Error fetching cart:', error);
            });
        } else {
          console.log('No token found in local storage');
        }
      }
      
    },
    removeItemFromCart(state, action) {
      console.log(action.payload)

      const {customer_id ,product_id }= action.payload;
      console.log(customer_id)
      console.log(product_id)
      const removedItemIndex = state.items.findIndex(
        (item) => item?._id == product_id
      );
      if (customer_id) {
        instance.delete(`/cart/${customer_id}/${product_id}`)
        .then(response => {
          dispatch({ type: 'REMOVE_ITEM_SUCCESS', payload: { product_id } });

          // Handle success if needed
        })
        .catch(error => {
          // Handle error if needed
        });
      }


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
       
      }
    },
    updateItemQuantity(state, action) {
      const {customer_id,product_id,quantity}=action.payload
      // alert("up")
      console.log(customer_id,product_id,quantity)
      instance.patch(`/cart/update`,{customer_id,product_id,quantity})
      .then(response => {
        // alert("updated")

        // Handle success if needed
      })
      .catch(error => {
        // Handle error if needed
      });
      
      
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

