import { createSlice } from '@reduxjs/toolkit';
import { endOfMonth, startOfMonth } from 'date-fns';

const initialState = {
  search: '',
  sortBy: 'date_desc',
  category: 'all',
  dates: [startOfMonth(new Date()), endOfMonth(new Date())],
};

const siftSlice = createSlice({
  name: 'sift',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    sortByDate(state, action) {
      state.sortBy = action.payload;
    },
    sortByAmount(state, action) {
      state.sortBy = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setDates(state, action) {
      state.dates = action.payload;
    },
  },
});

export const { setSearch, sortByDate, sortByAmount, setCategory, setDates } = siftSlice.actions;
export const siftSelector = (state) => state.sift;
export default siftSlice.reducer;
