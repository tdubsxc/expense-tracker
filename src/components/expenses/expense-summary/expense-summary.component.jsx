import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatter } from '../../../utils/expenses.utils.js';
import styles from './expense-summary.module.scss';

const expensesTotal = (expenses) => expenses.map((expense) => expense.amount).reduce((acc, val) => acc + val, 0);

const ExpenseSummary = ({ expenses }) => {
  const numOfExpenses = expenses.length;
  const total = expensesTotal(expenses);
  const formattedTotal = formatter.format(total);

  return (
    <section className={styles.box}>
      <div className="container">
        <h2 className={styles.title}>
          Viewing {numOfExpenses} {numOfExpenses === 1 ? 'expense' : 'expenses'} totalling{' '}
          <strong>{formattedTotal}</strong>
        </h2>
        <Link to="/add-expense" className={cn('btn-info', styles.addExpense)}>
          Add Expense
        </Link>
      </div>
    </section>
  );
};

export default ExpenseSummary;
