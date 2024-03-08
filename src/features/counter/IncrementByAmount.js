import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './counterSlice';

const IncrementByAmount = () => {
  const [amount, setAmount] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementByAmount(Number(amount))); 
  };

  return (
    <div>
      <h2>Current Value: {counter}</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleIncrement}>Increment by Amount</button>
    </div>
  );
};

export default IncrementByAmount;
