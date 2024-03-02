import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false, // assuming initially user is not logged in
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
