import { createSlice } from "@reduxjs/toolkit";


const hasToken = () => {
  // Implement your logic here to check if the token exists
  // For example, you can check if the token is stored in localStorage
  return !!localStorage.getItem('token'); // Return true if token exists, false otherwise
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: hasToken(), // assuming initially user is not logged in
    // other auth related state...
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      // other login related state updates...
    },
    logout(state) {
      state.isLoggedIn = false;
      // other logout related state updates...
    },
    // other auth related reducers...
  }
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
