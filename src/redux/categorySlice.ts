import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    listCategory: [
      {
        name: 'Tất cả',
        image: null,
      },
    ],
    addCategory: false,
  },
  reducers: {
    addList: (state, action) => {
      state.listCategory.push({
        name: action.payload.addItem,
        image: action.payload.image,
      });
    },
    plusCate: (state, action) => {
      state.addCategory = action.payload.addCate;
    },
  },
});

export const { addList, plusCate } = categorySlice.actions;
export default categorySlice.reducer;
