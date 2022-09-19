import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.uid = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.uid = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;
