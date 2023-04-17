import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    name: 'Khanh',
    email: 'khanhphamsj@gmai.com',
    phone: '0912352670',
    avtUrl:
      'https://secure.gravatar.com/avatar/4aa440c98afa8ea4e547c36783e4385b?s=256&d=mm&r=g',
    authStateChanged: null,
    start: '',
    end: '',
    uri: '',
    listProBySort: [],
    listDate: [],
    listOrdersByDate: []
  },
  reducers: {
    changeStateAuth: (state, action) => {
      state.authStateChanged = action.payload.change;
    },
    changeDateFilter: (state, action) => {
      state.start = action.payload.start,
        state.end = action.payload.end
    },
    cancelFilter: (state, action) => {
      state.start = action.payload.start,
        state.end = action.payload.start
    },
    changeUri: (state, action) => {
      state.uri = action.payload.uri
    },
    addPro: (state, action) => {
      action.payload?.cancel ? state.listProBySort = [] : state.listProBySort = action.payload.data
    },
    addListDate: (state, action) => {
      state.listDate = action.payload.data
    },
    listOrdersByDate: (state, action) => {
      state.listOrdersByDate = action.payload.data
    }
  },
});

export const { changeStateAuth, changeDateFilter, cancelFilter, changeUri, addPro, addListDate, listOrdersByDate } = userSlice.actions;
export default userSlice.reducer;
