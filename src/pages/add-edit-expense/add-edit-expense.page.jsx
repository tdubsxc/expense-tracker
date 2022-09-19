import React from 'react';
import { useLocation } from 'react-router-dom';
import ExpenseBanner from '../../components/expenses/expense-banner/expense-banner.component';
import ExpenseForm from '../../components/expenses/expense-form/expense-form.component';

const AddEditExpense = () => {
  const { pathname } = useLocation();
  const title = pathname.includes('add') ? 'Add Expense' : 'Edit Expense';

  return (
    <div>
      <ExpenseBanner title={title} />
      <ExpenseForm />
    </div>
  );
};

export default AddEditExpense;
