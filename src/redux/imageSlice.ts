import { createSlice } from '@reduxjs/toolkit';
export const imageSlice = createSlice({
  name: 'images',
  initialState: {
    listImages: [],
  },
  reducers: {
    addImage: (state, action) => {
      state.listImages.push({ id: action.payload.id, uri: action.payload.uri });
      // return [...state.listImages, action.payload.uri];
    },
  },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
