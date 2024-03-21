import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from './actions/action.type';

// Redux
const state = {
  count: 0,
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + action.payload;
    case DECREMENT_COUNT:
      return state - action.payload;
    case RESET_COUNT:
      return action.payload;

    default:
      return state;
  }
};

const reducer = combineReducers({
  count: countReducer,
});

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
