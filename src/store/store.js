import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import cartReducer from "./slices/cart"
import authSliceReducer from "./slices/authSlice";
import idCategoryReducer from "./slices/idCategory";
import idCategoryPageReducer from "./slices/productsCategory";
import customerReducer from "./slices/customer";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartReducer,
    auth:authSliceReducer,
    idCategory:idCategoryReducer,
    paginationProduct:idCategoryPageReducer,
    customer:customerReducer,
  },
});

export default store;
