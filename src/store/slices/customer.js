
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './../../axois/instance';

export const customerAction = createAsyncThunk("customer/getCustomer", async (id) => {
  const res = await instance.get(`/customers/${id}`);
  return res.data;
});


const customerSlice = createSlice({
    name: "customer",
    initialState: { customer: {} },
    extraReducers: (builder) => {
        builder.addCase(customerAction.fulfilled, (state, action) => {
            console.log(action.payload);
            state.customer = action.payload
        })
        builder.addCase(customerAction.rejected, (state, action) => {
            console.log("rejected");
        })

    }
})

export default customerSlice.reducer
