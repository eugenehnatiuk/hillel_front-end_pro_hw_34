import { RESET_COUNT, DECREMENT_COUNT, INCREMENT_COUNT } from './action.type';

const resetCount = () => ({
  type: RESET_COUNT,
  payload: 0,
});

const decrementCount = (count) => ({
  type: DECREMENT_COUNT,
  payload: count,
});

const incrementCount = (count) => ({
  type: INCREMENT_COUNT,
  payload: count,
});

export { resetCount, decrementCount, incrementCount };
