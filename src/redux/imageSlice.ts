import { createSlice } from '@reduxjs/toolkit';
export const imageSlice = createSlice({
  name: 'images',
  initialState: {
    listImages: [],
  },
  reducers: {
    addImage: (state: any, action) => {
      state.listImages.push({ id: action.payload.id, uri: action.payload.uri });
      // return [...state.listImages, action.payload.uri];
    //  console.log(state.listImages)
    },
    deleteImage: (state: any, action) => {
      // console.log(action.payload);
      const id = action.payload.id;
      state.listImages = state.listImages.filter((item: any) => item.id !== id);
    },
    reset: (state, action) => {
      state.listImages= action.payload.reset
    },
    update: (state, action) => {
      state.listImages = action.payload.imagesList;
    },
    cloudImages: (state, action) => {
      state.listImages = action.payload.image
    }
  },
});

export const { addImage, deleteImage, reset, update, cloudImages } = imageSlice.actions;
export default imageSlice.reducer;
