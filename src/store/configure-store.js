import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './root-saga';
import asyncReducer from './slices/async.slice';
import expensesReducer from './slices/expenses.slice';
import modalReducer from './slices/modal.slice';
import siftReducer from './slices/sift.slice';
import userReducer from './slices/user.slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  async: asyncReducer,
  expenses: expensesReducer,
  modal: modalReducer,
  sift: siftReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;
