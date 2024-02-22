import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import cartReducer from "./slices/cart"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer
  },
});

export default store;
