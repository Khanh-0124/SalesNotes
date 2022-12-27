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
    deleteImage: (state, action) => {
      // console.log(action.payload);
      const id = action.payload.id;
      state.listImages = state.listImages.filter(item => item.id !== id);
      console.log(state.listImages);
    },
  },
});

export const { addImage, deleteImage } = imageSlice.actions;
export default imageSlice.reducer;
