import 'antd/dist/antd.css';
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app.component';
import reportWebVitals from './reportWebVitals';
import store from './store/configure-store';
import './styles/index.scss';
import './styles/overrides.scss';

const rootEl = document.getElementById('root');
const jsx = (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

render(jsx, rootEl);
reportWebVitals();
