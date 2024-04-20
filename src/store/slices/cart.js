
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
      console.log("addto cart function")
      const { payload } = action;
      const newItem = payload;
      const isLoggedIn = newItem.isLoggedIn;

      // Update cart state
      console.log(state)
      const existingItemIndex = state.items.findIndex(item => item?._id === newItem?._id);
      if (existingItemIndex !== -1) {
        // Item already exists, increment quantity
        state.items[existingItemIndex].quantity++;
      } else {
        // Item doesn't exist, add it to the cart
        // const newProduct=
        console.log({...newItem})
        state.items.push({ ...newItem, quantity: 1 });
        console.log(state.items)
        
      }
      state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save cart to local storage if user is not logged in
      if (!isLoggedIn) {
        try {
          const existingCartData = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };
          const existingCartItemIndex = existingCartData.items.findIndex(item => item?._id === newItem?._id);
          if (existingCartItemIndex !== -1) {
            existingCartData.items[existingCartItemIndex].quantity++;
          } else {
            existingCartData.items.push({ ...newItem, quantity: 1 });
          }
          existingCartData.total += newItem?.price;
          localStorage.setItem("cart", JSON.stringify(existingCartData));
        } catch (error) {
          console.error('Error saving cart to local storage:', error);
        }
      }
      if (isLoggedIn) {
        const token = localStorage.getItem('token');
        if (token) {
          const myDecodedToken = decodeToken(token);
          console.log(myDecodedToken.id);
      
          // Send POST request to add the item to the cart
          instance.post('cart/add', { customer_id: myDecodedToken.id, product_id: newItem._id, quantity: 1 })
            .then(() => console.log('Product added to cart successfully'))
            .catch(error => console.error('Error adding product to cart:', error));
      
          // Now make the GET request to fetch the updated cart information
          instance.get(`cart/${myDecodedToken.id}`)
            .then(response => {
              console.log(response);
              const cartItems = response.data.cartItems;
              console.log(cartItems);
              console.log(state.total)
            
              const productIds = cartItems.map(item => item.product_id);
              if (!productIds.includes(newItem._id)) {
                console.log('Product was not added to the cart successfully');
              } else {
                console.log('Product added to the cart.');
              }
            })
            .catch(error => {
              console.error('Error fetching cart:', error);
            });
            state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

        } else {
          console.log('No token found in local storage');
        }
        // console.log(state.total)
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
          
          existingCartData.total = existingCartData.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
          }, 0);
          
          localStorage.setItem("cart", JSON.stringify(existingCartData));
        }

       
      }
    },
    updateItemQuantity(state, action) {
      const {customer_id,product_id,quantity}=action.payload
      // alert("up")
      console.log(customer_id,product_id,quantity)
      instance.patch(`/cart/update`,{customer_id,product_id,quantity})
      .then(response => {

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

