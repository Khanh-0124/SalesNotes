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
  },
  reducers: {
      addListOrder: (state: any, action) => {
    //  console.log(state.listOrders)
        state.listOrders.push({
        id: action.payload.id,
        name: action.payload.name,
        date: action.payload.hours,
        code: action.payload.code,
        delivered: true,
        // price: action.payload.price,
        sum: action.payload.sum,
        paid: action.payload.paid,
        ghino: action.payload.ghino,
        add: action.payload.add,
        listProducts: action.payload.products
        })
      }
  },
});

export const {addListOrder} = orderSlice.actions;
export default orderSlice.reducer;
