import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    listOrders: [
      // {
      //   id: 2,
      //   name: 'Khách lẻ',
      //   hours: '02:09 19/12',
      //   code: 'BSXQJA',
      //   delivered: true,
      //   // price: 1000,
      //   sum: 0,
      //   paid: true,
      //   ghino: true,
      //   add: 'sown kys',
      //   listProducts: [{id: 1, name: "my gao", images: [], sl: 1}],
      // },
    ],
    searchOrder: ""
  },
  reducers: {
      addListOrder: (state: any, action) => {
      state.listOrders.push(action.payload.data)
    },
    updateGhino: (state: any, action) => {
      state.listOrders[action.payload.id].ghino = action.payload.ghino
      state.listOrders[action.payload.id].ghino == 0 ? state.listOrders[action.payload.id].paid = true : null
      // console.log(state.listOrders[action.payload.id].payClient)
    },
    updateDelivered: (state: any, action) => {
      state.listOrders[action.payload.id].delivered = true
    },
    search: (state, action) => {
      state.searchOrder = action.payload.search
      // console.log(state.searchOrder)
      }
  },
});

export const { addListOrder, updateDelivered, updateGhino, search } = orderSlice.actions;
export default orderSlice.reducer;
