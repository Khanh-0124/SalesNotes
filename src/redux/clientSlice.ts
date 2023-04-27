import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../servers/firebase/crud';

export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    add: '',
    show: false,
    listClients: [],
  },
  reducers: {
    addClient: (state: any, action) => {
      state.listClients.push(action.payload.clientadd);
    },
    handleshow: (state, action) => {
      state.show = action.payload.show;
    },
    address: (state, action) => {
      state.add = action.payload.add;
    },
    updateCustomer: (state, action) => {
      state.listClients.map((item: any) => {
        console.log(action.payload.id, 'id');
        if (item.id == action.payload.id) {
          (item.name = action.payload.name),
            (item.phone = action.payload.phone),
            (item.add = action.payload.add);
          console.log(true);
        }
      });
    },
    deleteCustomer: (state, action) => {
      state.listClients.splice(action.payload.id, 1);
      state.listClients.map((item: any) => {
        if (item.id > action.payload.id) {
          item.id -= 1;
        }
      });
    },
    cloudData: (state, action) => {
      state.listClients = action.payload.data;
    },
    deleteDebt: (state: any, action) => {
      state.listClients[action.payload.id].transactionList.splice(action.payload.idDebt, 1);
      state.listClients[action.payload.id].sum = action.payload.sum;
    },
    inputDebt: (state: any, action) => {
      state.listClients[action.payload.id].transactionList.unshift({
        give: action.payload.give,
        take: action.payload.take,
        description: action.payload.description,
        date: action.payload.date,
      });
      state.listClients[action.payload.id].sum = action.payload.sum;
      console.log(
        state.listClients[action.payload.id].sum
      );
    },
    updateDebt: (state: any, action) => {
      state.listClients[action.payload.id].transactionList[action.payload.idDebt].give = action.payload.give
      state.listClients[action.payload.id].transactionList[action.payload.idDebt].take = action.payload.take
      state.listClients[action.payload.id].transactionList[action.payload.idDebt].description = action.payload.des
      state.listClients[action.payload.id].transactionList[action.payload.idDebt].date = action.payload.date
      state.listClients[action.payload.id].sum = action.payload.sum;
      //  state.listClients[action.payload.id].transactionList.splice(action.payload.idDebt, 0, action.payload.item);
    }
  }
});

export const {
  addClient,
  address,
  handleshow,
  cloudData,
  updateCustomer,
  deleteCustomer,
  inputDebt,
  deleteDebt,
  updateDebt
} = clientSlice.actions;
export default clientSlice.reducer;
