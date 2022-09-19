import { sub } from 'date-fns';
import { getVisibleExpenses } from '../store/selectors';
import { expenses } from './fixtures/test-data';

test('should sift through expenses.list based on the search value', () => {
  const sift = {
    search: 't',
    sortBy: 'date_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[1], expenses.list[0]]);
});

test('should sift through expenses.list based on sort by date in descending order', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[1], expenses.list[0], expenses.list[2]]);
});

test('should sift through expenses.list based on sort by date in ascending order', () => {
  const sift = {
    search: '',
    sortBy: 'date_asc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[2], expenses.list[0], expenses.list[1]]);
});

test('should sift through expenses.list based on sort by amount in descending order', () => {
  const sift = {
    search: '',
    sortBy: 'amount_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[0], expenses.list[2], expenses.list[1]]);
});

test('should sift through expenses.list based on sort by amount in ascending order', () => {
  const sift = {
    search: '',
    sortBy: 'amount_asc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[1], expenses.list[2], expenses.list[0]]);
});

test('should sift through expenses.list based on the category', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'food',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[1]]);
});

test('should sift through expenses.list based on the dates', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    dates: [sub(new Date(), { days: 7 }), new Date()],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses.list, sift);
  expect(selectedData).toEqual([expenses.list[0], expenses.list[2]]);
});
