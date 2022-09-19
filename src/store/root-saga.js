import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { createExpenseFs, deleteExpenseFs, fetchExpensesFs, updateExpenseFs } from '../api/firebase';
import { appActive, appReady, fetchCompleted, fetchFailed, fetchStarted } from './slices/async.slice';
import * as actions from './slices/expenses.slice';
import { userSelector } from './slices/user.slice';

// Workers

function* handleStartSetExpenses() {
  try {
    yield put(fetchStarted());
    const { uid } = yield select(userSelector);
    const expenses = yield call(fetchExpensesFs, uid);
    yield put(fetchCompleted());
    yield put(actions.setExpenses(expenses));
    yield put(appActive());
    yield put(appReady());
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

function* handleStartCreateExpense(action) {
  const { uid } = yield select(userSelector);
  const docRef = yield call(createExpenseFs, uid, action.payload);
  yield put(actions.createExpense({ id: docRef.id, ...action.payload }));
}

function* handleStartUpdateExpense(action) {
  const { uid } = yield select(userSelector);
  yield call(updateExpenseFs, uid, action.payload);
  yield put(actions.updateExpense(action.payload));
}

function* handleStartDeleteExpense(action) {
  const { uid } = yield select(userSelector);
  yield call(deleteExpenseFs, uid, action.payload);
  yield put(actions.deleteExpense(action.payload));
}

// Watchers

function* watchStartSetExpenses() {
  yield takeLatest(actions.startSetExpenses.type, handleStartSetExpenses);
}

function* watchStartCreateExpense() {
  yield takeLatest(actions.startCreateExpense.type, handleStartCreateExpense);
}

function* watchStartUpdateExpense() {
  yield takeLatest(actions.startUpdateExpense.type, handleStartUpdateExpense);
}

function* watchStartDeleteExpense() {
  yield takeLatest(actions.startDeleteExpense.type, handleStartDeleteExpense);
}

function* rootSaga() {
  yield all([watchStartSetExpenses(), watchStartCreateExpense(), watchStartUpdateExpense(), watchStartDeleteExpense()]);
}

export default rootSaga;
