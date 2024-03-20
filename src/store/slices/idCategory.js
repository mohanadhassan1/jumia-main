
import { createSlice } from '@reduxjs/toolkit';

const idCategorySlice =createSlice ({
    name: 'idCategory',
    initialState : {idCategory: '0'},
    reducers:{
        chanageId:(state,action)=>{
            state.idCategory = action.payload;
        }
    }
})

export const {chanageId} =idCategorySlice.actions
export default idCategorySlice.reducer