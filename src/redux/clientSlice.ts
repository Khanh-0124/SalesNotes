import { createSlice } from '@reduxjs/toolkit';
export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
  add: '',
  show: false,
  listClients: [
    {
      id: 0,
      name: 'Khách lẻ',
      phone: '012345678',
      add: "son kys, cat thanh truc, ninh"
    }
  ]
  },
  reducers: {
    addClient: (state, action) => {
      state.listClients.push(action.payload.clientadd)
    },
    handleshow: (state, action) => {
      state.show = action.payload.show
    },
    address: (state,  action) => {
      state.add = action.payload.add;
    }
  },
});

export const {addClient, address,  handleshow} = clientSlice.actions;
export default clientSlice.reducer;
