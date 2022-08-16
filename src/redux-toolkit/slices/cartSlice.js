import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  total_quantity: 0,
  total_bill: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let itemIndex = state.cartItems?.findIndex((item) => {
        return item?._id == action.payload?._id;
      });
      if (itemIndex == -1) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.cartItems[itemIndex] = {
          ...state?.cartItems[itemIndex],
          quantity: state?.cartItems[itemIndex]?.quantity + 1,
        };
      }
      state.total_bill = state.total_bill + action.payload?.price;
      state.total_quantity = state.total_quantity + 1;
    },
    increaseQuantity: (state, action) => {
      let price = 0;
      state.cartItems = state.cartItems?.map((item) => {
        if (item?._id == action.payload) {
          price += item?.price;
          return {
            ...item,
            quantity: item?.quantity + 1,
          };
        }
        return item;
      });
      state.total_bill = state.total_bill + price;
      state.total_quantity = state.total_quantity + 1;
    },
    decreaseQuantity: (state, action) => {
      let item = state?.cartItems?.find((item) => item?._id == action.payload);
      if (!item?.quantity) {
        return state;
      }
      if (item?.quantity > 1) {
        state.cartItems = state?.cartItems?.map((item) => {
          return {
            ...item,
            quantity: item?.quantity - 1,
          };
        });
      } else {
        state.cartItems = state?.cartItems?.filter((item) => {
          return item?._id != action.payload;
        });
      }
      state.total_bill = state.total_bill - item?.price;
      state.total_quantity = state.total_quantity - 1;
    },
    clearCart: (state, action) => {
      state.total_quantity = 0;
      state.total_bill = 0;
      state.cartItems = [];
    },
  },
});

export const { increaseQuantity, decreaseQuantity, addItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
