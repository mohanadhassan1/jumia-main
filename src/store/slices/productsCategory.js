
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../axois/instance';

export const fetchProductCategory = createAsyncThunk(
    "products/fetchProductCategory",
async (_,{ rejectWithValue}) =>{
    try{
        const response = await instance.get("/product/page/${page}/${id}");
        return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    }
);


const initialState = {
    productsCategory: [],
    loading: false,
    error: null,
};

const idCategoryPageSlice =createSlice ({
    name: 'idCategoryProduct',
    initialState ,
  
    extraReducers:(builder) =>{
        builder.addCase(fetchProductCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
          builder.addCase(fetchProductCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          });
          builder.addCase(fetchProductCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
        },
      });
export default idCategoryPageSlice.reducer