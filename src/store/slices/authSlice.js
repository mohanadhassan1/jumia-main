import { createSlice } from "@reduxjs/toolkit";

// const hasToken = () => {
//   return !!localStorage.getItem("token");
// };

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // isLoggedIn: hasToken(),
    // isLoggedIn: !!(localStorage.getItem('token')),
    isLoggedIn: true, // Set isLoggedIn to false if token is not present
    // isLoggedIn: false, // Set isLoggedIn to false if token is not present
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

export const { login, logout, isLoggedIn } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
