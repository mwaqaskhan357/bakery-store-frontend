import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../slices/authSlice";
import CategoryReducer from "../slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    home: CategoryReducer,
  },
});

export const dispatch = store.dispatch;
