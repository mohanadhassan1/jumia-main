// orderSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
// const [orderDetails,setOrderDetails]=useState()

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderDetails: {},
  },
  reducers: {
    setOrderDetails: (state, action) => {
        console.log(action.payload)
        state.orderDetails = { ...action.payload };
              console.log(state.orderDetails)
    },
  },
});

export const { setOrderDetails } = orderSlice.actions;
export const selectOrderDetails = (state) => state.order.orderDetails;


export default orderSlice.reducer;
