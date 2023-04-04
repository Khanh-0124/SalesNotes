import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../servers/firebase/crud';

const printData = async () => {
  await getData("products", 'customers')
}

export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
  add: '',
  show: false,
    listClients: []
  },
  reducers: {
    addClient: (state: any, action) => {
      state.listClients.push(action.payload.clientadd)
    },
    handleshow: (state, action) => {
      state.show = action.payload.show
    },
    address: (state,  action) => {
      state.add = action.payload.add;
    },
    updateCustomer: (state, action) => {
      state.listClients.map((item: any) => {
        console.log(action.payload.id, "id")
        if (item.id == action.payload.id) {
          item.name = action.payload.name,
            item.phone = action.payload.phone,
            item.add = action.payload.add
          console.log(true)
        }
      })
    },
    deleteCustomer: (state, action) => {
      state.listClients.splice(action.payload.id, 1);
      state.listClients.map((item: any) => {
        if (item.id > action.payload.id) {
          item.id -= 1
        }
      })
    },
    cloudData: (state, action) => {
      state.listClients = action.payload.data
    }
  },
});

export const { addClient, address, handleshow, cloudData, updateCustomer, deleteCustomer } = clientSlice.actions;
export default clientSlice.reducer;
