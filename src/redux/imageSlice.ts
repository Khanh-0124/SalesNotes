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
    },
    update: (state, action) => {
      state.listImages = action.payload.imagesList;
    }
  },
});

export const { addImage, deleteImage, reset, update } = imageSlice.actions;
export default imageSlice.reducer;
