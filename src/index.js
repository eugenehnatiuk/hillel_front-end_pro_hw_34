import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './toolkit/counterSlice';

// Redux

const store = configureStore({
  reducer: { counter: counterSlice },
});

// React
const mainEl = document.getElementById('root');
const container = ReactDOM.createRoot(mainEl);

if (!mainEl) {
  throw new Error('root not found');
}

container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
