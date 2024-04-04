import { createSlice } from "@reduxjs/toolkit";


const hasToken = () => {
  return !!localStorage.getItem('token'); 
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: hasToken(), 
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

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
