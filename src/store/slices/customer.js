
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './../../axois/instance';

export const userAction = createAsyncThunk("customer/getCustomer", async (id) => {
  const res = await instance.get(`/customers/${id}`);
  return res.data;
});


const customerSlice = createSlice({
    name: "customer",
    initialState: { customer: {} },
    extraReducers: (builder) => {
        builder.addCase(userAction.fulfilled, (state, action) => {
            console.log(action.payload);
            state.customer = action.payload
        })
        builder.addCase(userAction.rejected, (state, action) => {
            console.log("rejected");
        })
        // builder.addCase(userEditAction.fulfilled, (state, action) => {
        //     console.log(action.payload);
        // })
        // builder.addCase(userEditAction.rejected, (state, action) => {
        //     console.log("rejected");
        // })
    }
})

export default customerSlice.reducer
