import './counter.scss';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetCount } from '../../toolkit/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="main-section__counter">
      <h2>Simple Counter on React</h2>

      <div className="main-section__counter-box">
        <button
          className="main-section__decrement"
          onClick={() => dispatch(decrement(1))}
        >
          -
        </button>
        <span
          className={
            count < 0 ? 'main-section__count--zero' : ' main-section__count'
          }
        >
          {count}
        </span>
        <button
          className="main-section__increment"
          onClick={() => dispatch(increment(1))}
        >
          +
        </button>
      </div>
      <button
        className="main-section__reset-btn"
        onClick={() => dispatch(resetCount())}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
