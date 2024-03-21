import { RESET_COUNT, DECREMENT_COUNT, INCREMENT_COUNT } from './action.type';

const resetCount = () => ({
  type: RESET_COUNT,

});

const decrementCount = () => ({
  type: DECREMENT_COUNT,

});

const incrementCount = () => ({
  type: INCREMENT_COUNT,

});

export { resetCount, decrementCount, incrementCount };
