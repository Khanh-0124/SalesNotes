import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import imagesReducer from './imageSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    images: imagesReducer,
  },
});
