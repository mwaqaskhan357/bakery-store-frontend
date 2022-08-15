import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../slices/authSlice';
import CategoryReducer from '../slices/categoriesSlice';
import cartReducer from '../slices/cartSlice';
import itemsReducer from '../slices/itemsSlice';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
    home: CategoryReducer,
    cart: cartReducer,
    items: itemsReducer,
  },
});

export const dispatch = store.dispatch;
