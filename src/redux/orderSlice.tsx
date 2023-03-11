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
        sum: 0,
        paid: true,
      },
    ],
  },
  reducers: {},
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
