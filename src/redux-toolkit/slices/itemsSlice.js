import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  singleItem: null,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setsingleItem: (state, action) => {
      state.singleItem = action.payload;
    },
    removeSingleItem: (state, action) => {
      state.singleItem = null;
    },
  },
});

export const { setsingleItem, removeSingleItem } = itemsSlice.actions;
export default itemsSlice.reducer;
