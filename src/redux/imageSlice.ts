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
    //  console.log(state.listImages)
    },
    deleteImage: (state, action) => {
      // console.log(action.payload);
      const id = action.payload.id;
      state.listImages = state.listImages.filter(item => item.id !== id);
    },
    reset: (state, action) => {
      state.listImages= action.payload.reset
    }
  },
});

export const { addImage, deleteImage, reset } = imageSlice.actions;
export default imageSlice.reducer;
