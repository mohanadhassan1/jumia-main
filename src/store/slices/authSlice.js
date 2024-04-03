import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true, // assuming initially user is not logged in
    selectedUser: null,
    // other auth related state...
  },
  reducers: {
    // login(state, action) {
    //   state.isLoggedIn = true;
    //   state.selectedUser = action.payload.user;
    //   // other login related state updates...
    // },
    login(state, action) {
      if (action.payload && action.payload.user) {
        state.isLoggedIn = true;
        // state.selectedUser = action.payload.user;
      } else {
        console.error("User object is undefined or null");
      }
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.selectedUser = null;
      // other logout related state updates...
    },
    // other auth related reducers...
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectSelectedUser = (state) => state.auth.selectedUser;

export default authSlice.reducer;
