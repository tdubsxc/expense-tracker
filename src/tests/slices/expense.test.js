import cuid from 'cuid';
import expensesReducer, { createExpense, deleteExpense, updateExpense } from '../../store/slices/expenses.slice';
import { expenses } from '../fixtures/test-data';

// Actions

test('should generate the create expense action object with provided data', () => {
  const expenseData = {
    id: cuid(),
    description: 'Rent',
    note: "Last month's rent",
    category: 'housing',
    amount: 1250,
    date: 1616967192370,
  };

  const action = createExpense(expenseData);
  expect(action).toEqual({
    type: 'expenses/createExpense',
    payload: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});

test('should generate the update expense action object', () => {
  const action = updateExpense({ amount: 1010.25, note: 'Lorem ipsum.' });
  expect(action).toEqual({
    type: 'expenses/updateExpense',
    payload: {
      amount: 1010.25,
      note: 'Lorem ipsum.',
    },
  });
});

test('should generate the delete expense action object', () => {
  const action = deleteExpense('abc123');
  expect(action).toEqual({
    type: 'expenses/deleteExpense',
    payload: 'abc123',
  });
});

// Reducers

test('should generate default expense values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state.list).toEqual([]);
});

test('should add an expense to the expenses list', () => {
  const newExpense = {
    id: 'abc123',
    description: 'Uber',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'transportation',
    amount: 12.6,
    date: new Date(),
  };

  const action = {
    type: 'expenses/createExpense',
    payload: newExpense,
  };

  const state = expensesReducer(expenses, action);
  expect(state.list).toEqual([...expenses.list, newExpense]);
});

test('should update an expense', () => {
  const newValues = {
    description: 'Lyft',
  };

  const action = {
    type: 'expenses/updateExpense',
    payload: {
      ...expenses.list[1],
      ...newValues,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state.list[1].description).toBe('Lyft');
});

test('should delete an expense by its id', () => {
  const action = {
    type: 'expenses/deleteExpense',
    payload: expenses.list[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state.list).toEqual([expenses.list[0], expenses.list[2]]);
});

test('should not delete an expense if the id does not exist', () => {
  const action = {
    type: 'expenses/deleteExpense',
    payload: 'fakeId',
  };

  const state = expensesReducer(expenses, action);
  expect(state.list).toEqual(expenses.list);
});
