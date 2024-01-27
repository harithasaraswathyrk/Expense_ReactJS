// ExpenseCalculator.jsx

import React, { useState } from 'react';
import './ExpenseCalculator.css';
import AlertModal from './AlertModal';
const ExpenseCalculator = () => {
  const [amount, setAmount] = useState();

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleCalculate = () => {
    if (amount > 0) {
      alert(`Income: $${amount}`);
    } else if (amount < 0) {
      alert(`Expense: $${-amount}`);
    } else {
      alert('No income or expense entered.');
    }
  };

  return (
    <div className="expense-calculator">
      <h1>Expense Calculator</h1>
      <div className="input-container">
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="calculate-container">
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default ExpenseCalculator;
