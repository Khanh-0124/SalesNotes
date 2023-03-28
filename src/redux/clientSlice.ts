import { createSlice } from '@reduxjs/toolkit';
export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
  listClients: [
    {
      id: 0,
      name: 'Khách lẻ',
      phone: '012345678',
      add: {
        province: 'nam dinh',
        district: 'truc ninh',
        wards: 'cat thanh',
        addDetail: "xom Son ky",
      }
    }
  ]
  },
  reducers: {
    addClient: (state, action) => {
      state.listClients.push(action.payload.client)
    }
  },
});

export const {addClient} = clientSlice.actions;
export default clientSlice.reducer;
