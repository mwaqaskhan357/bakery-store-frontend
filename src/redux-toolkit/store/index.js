import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../slices/authSlice';
import CategoryReducer from '../slices/categoriesSlice';
import cartReducer from '../slices/cartSlice';
import itemsReducer from '../slices/itemsSlice';
import ordersReducer from '../slices/order';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  login: LoginReducer,
  home: CategoryReducer,
  cart: cartReducer,
  items: itemsReducer,
  orders: ordersReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export const dispatch = store.dispatch;
