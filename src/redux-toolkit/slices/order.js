import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  orders: [],
  singleOrder: {},
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders = [{ ...action.payload }, ...state.orders];
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setSingleOrder: (state, action) => {
      state.singleOrder = action.payload;
    },
  },
});

export const { addOrder, setOrders, setSingleOrder } = orderSlice.actions;
export default orderSlice.reducer;
