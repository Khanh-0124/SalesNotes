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
  },
  reducers: {
    addList: (state, action) => {},
  },
});

export const { addList } = categorySlice.actions;
export default categorySlice.reducer;
