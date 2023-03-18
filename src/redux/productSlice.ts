import { createSlice } from '@reduxjs/toolkit';
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    listProducts: [
  
      {
        id: 0,
        name: 'Nước tăng lực',
        price: 10000,
        remaining: `còn: ${7}`,
        image: [{
          id: 1,
          uri: 'https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg',
        }],
        touch: 0,
      },
    ],
    quantity: 0,
    pay: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.listProducts.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        remaining: action.payload.remaining,
        image: action.payload.image,
        touch: action.payload.touch,
      });
      console.log(state.listProducts)
    },
    updateProduct: (state, action) => {
      state.listProducts[action.payload.id].touch = action.payload.touch;
    },
    addQuantity: (state, action) => {
      state.quantity = action.payload.add;
      state.pay += action.payload.pay;
    },
    reset: (state, action) => {
      state.quantity = action.payload.add;
      state.pay = action.payload.pay;
    },
  },
});

export const { addProducts, updateProduct, addQuantity, reset } =
  productSlice.actions;
export default productSlice.reducer;
