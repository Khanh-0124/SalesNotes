import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../servers/firebase/crud';

export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    add: '',
    show: false,
    listClients: [],
    bc: [],
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
    cloudBc: (state, action) => {
      state.bc = action.payload.bc
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
      state.listClients[action.payload.id].transactionList.splice(
        action.payload.idDebt,
        1,
      );
      state.listClients[action.payload.id].sum = action.payload.sum;
    },
    addbc: (state: any, action) => {
      state.bc.push({
        idbc: action.payload.idbc,
        give: action.payload.give,
        take: action.payload.take,
        date: action.payload.date,
        hours: action.payload.hours,
        category: action.payload.category,
      });
    },
    updatebc: (state: any, action) => {
      state.bc[action.payload.id].give = action.payload.give;
      state.bc[action.payload.id].take = action.payload.take;
      state.bc[action.payload.id].date = action.payload.date;
      state.bc[action.payload.id].hours = action.payload.hours;
      state.bc[action.payload.id].category = action.payload.category;
      // console.log( state.bc[action.payload.id].give, state.bc[action.payload.id].take , "chimkt")
    },
    inputDebt: (state: any, action) => {
      state.listClients[action.payload.id].transactionList.unshift({
        give: action.payload.give,
        idbc: action.payload.idbc,
        take: action.payload.take,
        description: action.payload.description,
        date: action.payload.date,
        hours: action.payload.hours,
        category: action.payload.category,
      });
      state.listClients[action.payload.id].sum = action.payload.sum;
      console.log(state.listClients[action.payload.id].sum);
    },
    setSum: (state: any, action) => {
      state.listClients[action.payload.id].sum = action.payload.sum
    },
    updateDebt: (state: any, action) => {
      state.listClients[action.payload.id].transactionList[
        action.payload.idDebt
      ].give = action.payload.give;
      state.listClients[action.payload.id].transactionList[
        action.payload.idDebt
      ].take = action.payload.take;
      state.listClients[action.payload.id].transactionList[
        action.payload.idDebt
      ].description = action.payload.des;
      state.listClients[action.payload.id].transactionList[
        action.payload.idDebt
      ].date = action.payload.date;
      state.listClients[action.payload.id].sum = action.payload.sum;
      //  state.listClients[action.payload.id].transactionList.splice(action.payload.idDebt, 0, action.payload.item);
    },
  },
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
  updateDebt,
  addbc,
  updatebc,
  setSum,
  cloudBc,
} = clientSlice.actions;
export default clientSlice.reducer;
