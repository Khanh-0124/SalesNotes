import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categorys',
  initialState: {
    listCategory: [],
    addCategory: false,
    productsNoCategory: []
  },
  reducers: {
    addList: (state: any, action) => {
      state.listCategory.push({
        id: action.payload.id,
        name: action.payload.addItem,
        image: action.payload.image,
        tick: action.payload.tick,
        products: [], 
      });
    },
    updateList: (state: any, action) => {
      state.listCategory[action.payload.id].tick = action.payload.tick;
    },
    plusCate: (state, action) => {
      state.addCategory = action.payload.addCate;
    },
    actionProducts: (state: any, action) => {
      let count = 0;
      state.listCategory.map((item: any) => {
        if(item.tick === true) {
          item.products.push(action.payload.product)
          count ++;
          console.log(item.product)
        }
      })
      if(count === 0) {
        state.productsNoCategory.push(action.payload.product)
        console.log("No cate: ",state.productsNoCategory)
      }
    },
    edit: (state: any, action) => {
      state.listCategory[action.payload.id].name = action.payload.name 
    },
    resetCate: (state, action) => {
      state.listCategory.map((item: any) => item.tick = action.payload.set)
    },
    deleteCate: (state: any, action) => {
      let newProdustNoCate = state.listCategory[action.payload.id].products.filter((item: any) => !state.productsNoCategory.includes(item.id))
      state.productsNoCategory =  state.productsNoCategory.concat(newProdustNoCate)
      // state.listCategory[action.payload.id].products = []
      const index = state.listCategory.findIndex((product: any) => product.id === action.payload.id);
      state.listCategory?.splice(index, 1)
      state.listCategory.map((item: any) => {
        if(item.id > action.payload.id) {
          item.id -= 1
        }
      })
      // console.log(state.listCategory)
    },
    addCatePr:(state: any, action) => {
      let count = 0;
      state.listCategory[action.payload.id].products.filter((item: any) => action.payload.items.id == item?.id ? count ++ : null)
      if( count ==0)
      state.listCategory[action.payload.id].products.push(action.payload.items)
      // console.log( state.listCategory[action.payload.id].products)
    }
  },
});

export const { addList, plusCate, updateList, actionProducts, edit, resetCate, deleteCate, addCatePr } = categorySlice.actions;
export default categorySlice.reducer;
