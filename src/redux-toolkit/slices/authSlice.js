import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  token: "",
};

export const loginSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, setLoggedIn } = loginSlide.actions;
export default loginSlide.reducer;
