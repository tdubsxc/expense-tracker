import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  isInitialized: false,
  isIdle: true,
};

const asyncSlice = createSlice({
  name: 'async',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.isLoading = true;
    },
    fetchCompleted: (state) => {
      state.isLoading = false;
    },
    fetchFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    appReady: (state) => {
      state.isInitialized = true;
    },
    appActive: (state) => {
      state.isIdle = false;
    },
    appInactive: (state) => {
      state.isIdle = true;
    },
  },
});

export const { fetchStarted, fetchCompleted, fetchFailed, appReady, appActive, appInactive } = asyncSlice.actions;
export const asyncSelector = (state) => state.async;
export default asyncSlice.reducer;
