import { createSlice } from '@reduxjs/toolkit';

const INITIAL_VALUE = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: INITIAL_VALUE },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    resetCount: () => {
      return {
        value: INITIAL_VALUE,
      };
    },
  },
});
export default counterSlice.reducer;

export const {
  increment,
  decrement,
  resetCount,
} = counterSlice.actions;
