import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axois/instance";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/product");
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const selectFilteredProducts = (state) => {
//   const { products, searchTerm } = state.products;
//   return products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

const initialState = {
  products: [],
  loading: false,
  error: null,
  // searchTerm: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
