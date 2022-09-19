import { endOfMonth, startOfMonth } from 'date-fns';
import siftReducer, { setCategory, setDates, setSearch, sortByAmount, sortByDate } from '../../store/slices/sift.slice';

// Actions

test('should generate the set search action object', () => {
  const searchValue = 'rent';
  const action = setSearch(searchValue);
  expect(action).toEqual({
    type: 'sift/setSearch',
    payload: searchValue,
  });
});

test('should generate the sort by date descending action object', () => {
  const action = sortByDate('date_desc');
  expect(action).toEqual({
    type: 'sift/sortByDate',
    payload: 'date_desc',
  });
});

test('should generate the sort by date ascending action object', () => {
  const action = sortByDate('date_asc');
  expect(action).toEqual({
    type: 'sift/sortByDate',
    payload: 'date_asc',
  });
});

test('should generate the sort by amount descending action object', () => {
  const action = sortByAmount('amount_desc');
  expect(action).toEqual({
    type: 'sift/sortByAmount',
    payload: 'amount_desc',
  });
});

test('should generate the sort by amount ascending action object', () => {
  const action = sortByAmount('amount_asc');
  expect(action).toEqual({
    type: 'sift/sortByAmount',
    payload: 'amount_asc',
  });
});

test('should generate the set category action object', () => {
  const category = 'food';
  const action = setCategory(category);
  expect(action).toEqual({
    type: 'sift/setCategory',
    payload: category,
  });
});

test('should generate the set dates action object', () => {
  const dates = [new Date(), new Date()];
  const action = setDates(dates);
  expect(action).toEqual({
    type: 'sift/setDates',
    payload: dates,
  });
});

// Reducers

test('should generate default sift values', () => {
  const state = siftReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    dates: [startOfMonth(new Date()), endOfMonth(new Date())],
  });
});

test('should set search', () => {
  const search = 'abc';
  const action = { type: 'sift/setSearch', payload: search };

  const state = siftReducer(undefined, action);
  expect(state.search).toBe(search);
});

test('should set sortBy to date descending', () => {
  const currentState = {
    search: '',
    sortBy: 'date_asc',
    category: 'all',
    dates: [null, null],
  };

  const action = { type: 'sift/sortByDate', payload: 'date_desc' };

  const state = siftReducer(currentState, action);
  expect(state.sortBy).toBe('date_desc');
});

test('should set sortBy to date ascending', () => {
  const action = { type: 'sift/sortByDate', payload: 'date_asc' };

  const state = siftReducer(undefined, action);
  expect(state.sortBy).toBe('date_asc');
});

test('should set sortBy to amount descending', () => {
  const action = { type: 'sift/sortByAmount', payload: 'amount_desc' };

  const state = siftReducer(undefined, action);
  expect(state.sortBy).toBe('amount_desc');
});

test('should set sortBy to amount ascending', () => {
  const action = { type: 'sift/sortByAmount', payload: 'amount_asc' };

  const state = siftReducer(undefined, action);
  expect(state.sortBy).toBe('amount_asc');
});

test('should set the category', () => {
  const category = 'housing';
  const action = { type: 'sift/setCategory', payload: category };

  const state = siftReducer(undefined, action);
  expect(state.category).toBe(category);
});

test('should set/clear dates', () => {
  const dates = [null, null];
  const action = { type: 'sift/setDates', payload: dates };

  const state = siftReducer(undefined, action);
  expect(state.dates).toBe(dates);
});
