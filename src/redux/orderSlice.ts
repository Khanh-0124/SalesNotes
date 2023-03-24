import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    listOrders: [
      {
        id: 1,
        name: 'Khách lẻ',
        hours: '02:09 19/12',
        code: 'BSXQJA',
        delivered: true,
        price: 1000,
        sum: 0,
        paid: true,
        add: 'sown kys',
        listProducts: [{id: 1, name: "my gao", images: [], sl: 1}],
      },
    ],
  },
  reducers: {
      addListOrder: (state, action) => {
        state.listOrders.push({
        id: action.payload.id,
        name: action.payload.name,
        hours: "",
        code: "",
        delivered: false,
        price: 0,
        sum: 0,
        paid: action.payload.paid,
        add: action.payload.add,
        listProducts: action.payload.products,
        })
      }
  },
});

export const {addListOrder} = orderSlice.actions;
export default orderSlice.reducer;
