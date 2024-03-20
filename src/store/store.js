import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import cartReducer from "./slices/cart"
import authSliceReducer from "./slices/authSlice";
import idCategoryReducer from "./slices/idCategory"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer,
    auth:authSliceReducer,
    idCategory:idCategoryReducer
  },
});

export default store;
