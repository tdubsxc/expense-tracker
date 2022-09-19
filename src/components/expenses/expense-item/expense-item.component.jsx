import { format } from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatter } from '../../../utils/expenses.utils.js';
import styles from './expense-item.module.scss';

const ExpenseItem = ({ id, description, amount, date }) => {
  return (
    <div className={styles.box}>
      <Link to={`/manage-expense/${id}`}>
        <div className={styles.flex}>
          <div>
            <h4>{description}</h4>
            <span>{format(date, 'MMMM d, yyyy')}</span>
          </div>
          <div>
            <h4>{formatter.format(amount)}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
};

export default ExpenseItem;
