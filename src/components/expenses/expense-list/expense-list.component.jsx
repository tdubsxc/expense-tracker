import PropTypes from 'prop-types';
import React from 'react';
import ExpenseItem from '../expense-item/expense-item.component';
import styles from './expense-list.module.scss';

const ExpenseList = ({ expenses }) => {
  return (
    <section>
      <div className={styles.headings}>
        <h3>Description</h3>
        <h3>Amount</h3>
      </div>
      {expenses.length === 0 ? (
        <div className={styles.noExpenses}>
          <span>No Expenses...</span>
        </div>
      ) : (
        expenses.map((expense) => <ExpenseItem key={expense.id} {...expense} />)
      )}
    </section>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
      note: PropTypes.string,
    }),
  ),
};

export default ExpenseList;
