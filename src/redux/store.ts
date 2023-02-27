import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import imagesReducer from './imageSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    images: imagesReducer,
    categorys: categoryReducer,
    products: productReducer,
  },
});
