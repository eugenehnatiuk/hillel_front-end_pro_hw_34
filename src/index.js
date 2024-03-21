import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux
const INITIAL_VALUE = 0;

const state = {
  count: INITIAL_VALUE,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT_COUNT':
      return {
        count: state.count - 1,
      };
    case 'RESET_COUNT':
      return {
        count: INITIAL_VALUE,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, state);

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
