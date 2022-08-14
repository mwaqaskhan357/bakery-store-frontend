import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
  filteredCategories: [],
};

export const categorySlide = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCatgories: (state, action) => {
      state.categories = action.payload;
    },
    setFilterCatgories: (state, action) => {
      state.filteredCategories = action.payload;
    },
  },
});

export const { setCatgories, setFilterCatgories } = categorySlide.actions;
export default categorySlide.reducer;
