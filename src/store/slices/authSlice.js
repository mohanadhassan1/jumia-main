import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
  name: "auth",
  initialState: {
   
    isLoggedIn: !!(localStorage.getItem('token')), // Set isLoggedIn to false if token is not present
  },
  
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout,isLoggedIn } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
