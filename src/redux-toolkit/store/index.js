import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export const dispatch = store.dispatch;
