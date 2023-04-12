import { createSlice } from '@reduxjs/toolkit';
export const notificationSlice = createSlice({
  name: 'notifys',
  initialState: {
    OutofStockWarning: [
    ]
  },
  reducers: {
    addOutofStockWarning: (state: any, action) => {
      state.OutofStockWarning = action.payload.OutofStockWarning
      // console.log(state.OutofStockWarning.length)
    }
  },
});

export const { addOutofStockWarning } = notificationSlice.actions;
export default notificationSlice.reducer;
