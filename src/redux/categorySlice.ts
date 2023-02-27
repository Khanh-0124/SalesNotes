import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    listCategory: [
      {
        name: 'Tất cả',
        image: null,
        tick: false,
      },
    ],
    addCategory: false,
  },
  reducers: {
    addList: (state, action) => {
      state.listCategory.push({
        name: action.payload.addItem,
        image: action.payload.image,
        tick: action.payload.tick,
      });
    },
    updateList: (state, action) => {
      state.listCategory[action.payload.id].tick = action.payload.tick;
    },
    plusCate: (state, action) => {
      state.addCategory = action.payload.addCate;
    },
  },
});

export const { addList, plusCate, updateList } = categorySlice.actions;
export default categorySlice.reducer;
