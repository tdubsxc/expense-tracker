import { createSelector } from '@reduxjs/toolkit';

export const selectExpenses = (state) => state.expenses.list;
export const selectSift = (state) => state.sift;

export const selectVisibleExpenses = createSelector(
  [selectExpenses, selectSift],
  (expenses, { search, sortBy, category, dates }) => {
    return expenses
      .filter((expense) => {
        const searchMatch = new RegExp(search, 'gi').test(expense.description);
        const categoryMatch = category === 'all' || expense.category === category;
        const startDateMatch = dates[0] === null || expense.date >= dates[0];
        const endDateMatch = dates[1] === null || expense.date <= dates[1];
        return searchMatch && categoryMatch && startDateMatch && endDateMatch;
      })
      .sort((a, b) => {
        if (sortBy === 'date_desc') return b.date - a.date;
        if (sortBy === 'date_asc') return a.date - b.date;
        if (sortBy === 'amount_desc') return b.amount - a.amount;
        if (sortBy === 'amount_asc') return a.amount - b.amount;
        return 0;
      });
  },
);
