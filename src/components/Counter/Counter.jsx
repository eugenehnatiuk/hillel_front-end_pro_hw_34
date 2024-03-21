import React from 'react';
import './counter.scss';
import {
  resetCount,
  decrementCount,
  incrementCount,
} from '../../actions/changeCount';

import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const plus = incrementCount();
  const minus = decrementCount();
  const reset = resetCount();

  return (
    <div className="main-section__counter">
      <h2>Simple Counter on React</h2>

      <div className="main-section__counter-box">
        <button
          className="main-section__decrement"
          onClick={() => dispatch(minus)}
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
          onClick={() => dispatch(plus)}
        >
          +
        </button>
      </div>
      <button
        className="main-section__reset-btn"
        onClick={() => dispatch(reset)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
