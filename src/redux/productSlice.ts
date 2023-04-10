import { createSlice } from '@reduxjs/toolkit';
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    listProducts: [
  
      // {
      //   id: 0,
      //   name: 'Nước tăng lực',
      //   price: 10000,
      //   remaining: `còn: ${7}`,
      //   image: [{
      //     id: 1,
      //     uri: 'https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg',
      //   }],
      //   touch: 0,
      // },
    ],
    quantity: 0,
    pay: 0,
  },
  reducers: {
    addProducts: (state: any, action) => {
      state.listProducts.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        pricev: action.payload.pricev,
        remaining: action.payload.remain,
        image: action.payload.image,
        touch: action.payload.touch,
        addCate: false,
        dv: action.payload.dv
      });
    },
    updateProduct: (state: any, action) => {
      state.listProducts[action.payload.id].touch = action.payload.touch;
    },
    addQuantity: (state, action) => {
      state.quantity = action.payload.add;
      state.pay += action.payload.pay;
    },
    reset: (state: any, action) => {
      state.quantity = action.payload.add;
      state.pay = action.payload.pay;
      if(action.payload.touch  == 0) {
        state.quantity = 0
        state.pay = 0
        state.listProducts.map((item: any) => item.touch = 0)
        
      }
    },
    updateDetail: (state: any, action) => {
      state.listProducts[action.payload.id].image = action.payload.image
    },
    deleteProduct: (state, action) => {
      state.listProducts.splice(action.payload.id, 1);
      state.listProducts.map((item: any) => {
        if(item.id > action.payload.id) {
          item.id -= 1
        }
      })
    },
    addCategory: (state: any, action) => {
      state.listProducts[action.payload?.id].addCate = !state.listProducts[action.payload?.id].addCate;
    },
    delTickAddToCate  : (state: any, action) => {
      state.listProducts.map((item: any) => item.addCate = false)
    },
    cloudProducts: (state, action) => {
      state.listProducts = action.payload.product
    },
    productsByAZ: (state, action) => {
      state.listProducts = action.payload.newproducts
    } 
  },
});

export const { addProducts, updateProduct, addQuantity, reset, updateDetail, deleteProduct, addCategory, delTickAddToCate, cloudProducts, productsByAZ } =
  productSlice.actions;
export default productSlice.reducer;
