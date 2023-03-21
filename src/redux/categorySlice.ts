import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categorys',
  initialState: {
    listCategory: [
      {
        id: 0,
        name: 'Tất cả',
        image: null,
        tick: false,
        products: []
      },
    ],
    addCategory: false,
  },
  reducers: {
    addList: (state, action) => {
      state.listCategory.push({
        id: action.payload.id,
        name: action.payload.addItem,
        image: action.payload.image,
        tick: action.payload.tick,
        products: []
      });
    },
    updateList: (state, action) => {
      state.listCategory[action.payload.id].tick = action.payload.tick;
    },
    plusCate: (state, action) => {
      state.addCategory = action.payload.addCate;
    },
    actionProducts: (state, action) => {
      state.listCategory.map((item: any) => {
        if(item.tick === true) {
          item.products.push(action.payload.product)
          // console.log(item.product)
        }
      })
    },
    edit: (state, action) => {
      state.listCategory[action.payload.id].name = action.payload.name 
    }
  },
});

export const { addList, plusCate, updateList, actionProducts, edit } = categorySlice.actions;
export default categorySlice.reducer;
