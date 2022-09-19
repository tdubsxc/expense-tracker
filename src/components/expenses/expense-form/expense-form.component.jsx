import { Button, Form, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import {
  FormDatePicker,
  FormNumberField,
  FormSelect,
  FormTextArea,
  FormTextField,
} from '../../../elements/form-inputs.element';
import { selectExpenses } from '../../../store/selectors.js';
import { startCreateExpense, startDeleteExpense, startUpdateExpense } from '../../../store/slices/expenses.slice.js';
import { categoryOptions } from '../../../utils/expenses.utils.js';
import styles from './expense-form.module.scss';

const ExpenseForm = () => {
  const history = useHistory();
  const params = useParams();
  const { pathname } = useLocation();
  const expenses = useSelector(selectExpenses);
  const selectedExpenseIdx = expenses.findIndex((expense) => expense.id === params.id);
  const selectedExpense = expenses[selectedExpenseIdx];
  const dispatch = useDispatch();

  const initialValues = selectedExpense || null;

  const handleSubmit = (values) => {
    selectedExpense
      ? dispatch(startUpdateExpense({ ...selectedExpense, ...values }))
      : dispatch(startCreateExpense(values));
    history.push('/dashboard');
  };

  const handleDeleteExpense = () => {
    dispatch(startDeleteExpense(selectedExpense.id));
    history.push('/dashboard');
  };

  if (pathname.includes('manage-expense') && selectedExpenseIdx < 0) return <Redirect to="/error" />;

  return (
    <div className="container-narrow">
      <div className={styles.box}>
        <Form initialValues={initialValues} onFinish={handleSubmit} layout="vertical">
          <FormTextField
            field={{
              label: 'Description',
              name: 'description',
              rules: [{ required: true, message: 'Please provide a description.' }],
            }}
            placeholder="Lunch"
          />
          <FormNumberField
            field={{
              label: 'Amount',
              name: 'amount',
              rules: [{ required: true, message: 'Please provide an amount.' }],
            }}
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            precision={2}
            placeholder="12.75"
          />
          <FormSelect
            field={{
              label: 'Category',
              name: 'category',
              rules: [{ required: true, message: 'Please select a category.' }],
            }}
            allowClear
            options={categoryOptions.slice(1)}
            placeholder="Food"
          />
          <FormDatePicker
            field={{
              label: 'Date',
              name: 'date',
              rules: [{ required: true, message: 'Please pick a date.' }],
            }}
            format="MM-DD-YYYY"
            placeholder="03-22-2021"
          />
          <FormTextArea
            field={{
              label: 'Note',
              name: 'note',
            }}
            rows="3"
            placeholder="Chipotle (This field is optional...)"
          />
          <div className={styles.btnGroup}>
            <div>
              <Space>
                <Button onClick={() => history.push('/dashboard')} className="btn">
                  Cancel
                </Button>
                {selectedExpense && (
                  <Button onClick={handleDeleteExpense} className="btn-negative">
                    Delete
                  </Button>
                )}
              </Space>
            </div>
            <Button htmlType="submit" className="btn-positive">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ExpenseForm;
