import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => { 
      state.isLoggedIn = true; 
    },
    logout: (state) => { 
      state.isLoggedIn = false; 
    },
  },
});

export const { login, logout } = authSlice.actions; // ✅ Correctly export actions
export default authSlice.reducer; // ✅ Export reducer
