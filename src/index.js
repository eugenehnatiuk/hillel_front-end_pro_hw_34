import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux
const state = {
  count: 0,
};

const reducer = (states = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...states,
        count: states.count + action.payload,
      };
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: states.count - action.payload,
      };
    case 'RESET_COUNT':
      return {
        ...state,
        count: action.payload,
      };

    default:
      return states;
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
