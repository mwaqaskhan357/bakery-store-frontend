import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  total_quantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      let item = action?.cartItems?.find(
        (item) => item._id == action?.payload?._id
      );
      if (item == undefined) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.cartItems = state?.cartItems?.map((item) => {
          if (item._id == action?.payload?._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      state.total_quantity = state.total_quantity + 1;
    },
    removeCartItem: (state, action) => {
      if (action.payload?.quantity <= 1) {
        state.cartItems = state?.cartItems?.filter(
          (item) => item._id != action.payload?._id
        );
      } else {
        state.cartItems = state?.cartItems?.map((item) => {
          if (item._id == action.payload?._id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      }
      state.total_quantity = state.total_quantity - 1;
    },
  },
});

export const { setCartItems, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
