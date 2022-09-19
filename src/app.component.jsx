import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/header/header.component';
import ErrorBoundary from './components/misc/error-boundary/error-boundary.component';
import Loader from './components/misc/loader/loader.component';
import ModalManager from './components/misc/modal/modal-manager.component';
import PrivateRoute from './components/router/private-route.component';
import PublicRoute from './components/router/public-route.component';
import { auth } from './configs/firebase.config';
import AddEditExpense from './pages/add-edit-expense/add-edit-expense.page';
import Landing from './pages/landing/landing.page';
import NotFound from './pages/not-found/not-found.page';
import { appInactive, appReady, asyncSelector } from './store/slices/async.slice.js';
import { startSetExpenses } from './store/slices/expenses.slice.js';
import { signIn, signOut } from './store/slices/user.slice.js';

const DashboardLazy = lazy(() => import('./pages/dashboard/dashboard.page.jsx'));

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isInitialized } = useSelector(asyncSelector);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn(user.uid));
        dispatch(startSetExpenses());
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      } else {
        dispatch(signOut());
        dispatch(appInactive());
        dispatch(appReady());
        if (history.location.pathname !== '/') {
          history.push('/');
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, history]);

  return !isInitialized && history.location.pathname === '/' ? (
    <></>
  ) : !isInitialized ? (
    <Loader />
  ) : (
    <>
      <ModalManager />
      <PublicRoute exact path="/" component={Landing} />
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          <Route
            path={'/(.+)'}
            render={() => (
              <div className="page-section">
                <Header />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={DashboardLazy} />
                  <PrivateRoute exact path={['/add-expense', '/manage-expense/:id']} component={AddEditExpense} />
                  <PrivateRoute path={['/error', '*']} component={NotFound} />
                </Switch>
              </div>
            )}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
