import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  token: "",
  user: null,
};

export const loginSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, setLoggedIn, setUser } = loginSlide.actions;
export default loginSlide.reducer;
