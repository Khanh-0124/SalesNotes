import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Khanh',
    email: 'khanhphamsj@gmai.com',
    phone: '0912352670',
    avtUrl:
      'https://secure.gravatar.com/avatar/4aa440c98afa8ea4e547c36783e4385b?s=256&d=mm&r=g',
    authStateChanged: false,
  },
  reducers: {
    changeStateAuth: (state, action) => {
      state.authStateChanged = action.payload.authStateChanged;
    },
  },
});

export const { changeStateAuth } = userSlice.actions;
export default userSlice.reducer;
