import React, { useState } from 'react';

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [prevOperand, setprevOperand] = useState('');
  const [operand, setOperand] = useState('');
  const [result, setResult] = useState();

  const handleInput = (e) => {
    const { value } = e.target;
    if (value === '.' && currentOperand.includes('.')) {
      return;
    }
    setCurrentOperand(currentOperand + value);
  };
  const allClear = () => {
    setCurrentOperand('');
    setprevOperand('');
    setOperand('');
    setResult('');
  };
  const handleOperand = (e) => {
    const { value } = e.target;
    setprevOperand(currentOperand);
    setCurrentOperand('');
    setOperand(value);
  };
  const makeComputation = () => {
    let result;
    switch (operand) {
      case '/':
        result =
          parseFloat(prevOperand) / parseFloat(currentOperand).toFixed(6);
        setResult(result.toFixed(6));
        break;
      case '*':
        result =
          parseFloat(prevOperand) * parseFloat(currentOperand).toFixed(6);
        setResult(result.toFixed(6));
        break;
      case '-':
        result =
          parseFloat(prevOperand) - parseFloat(currentOperand).toFixed(6);
        setResult(result.toFixed(6));
        break;
      case '+':
        result =
          parseFloat(prevOperand) + parseFloat(currentOperand).toFixed(6);
        setResult(result.toFixed(6));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div>Current Operand: {currentOperand}</div>
      <div>
        Previous Operand: {prevOperand}
        {operand}
      </div>
      <div>Result: {result}</div>
      <button value="1" onClick={handleInput}>
        1
      </button>
      <button value="2" onClick={handleInput}>
        2
      </button>
      <button value="3" onClick={handleInput}>
        3
      </button>
      <button value="4" onClick={handleInput}>
        4
      </button>
      <button value="5" onClick={handleInput}>
        5
      </button>
      <button value="6" onClick={handleInput}>
        6
      </button>
      <button value="7" onClick={handleInput}>
        7
      </button>
      <button value="8" onClick={handleInput}>
        8
      </button>
      <button value="9" onClick={handleInput}>
        9
      </button>
      <button value="0" onClick={handleInput}>
        0
      </button>
      <button value="." onClick={handleInput}>
        .
      </button>
      <button onClick={allClear}>AC</button>
      <button value="/" onClick={handleOperand}>
        /
      </button>
      <button value="*" onClick={handleOperand}>
        *
      </button>
      <button value="-" onClick={handleOperand}>
        -
      </button>
      <button value="+" onClick={handleOperand}>
        +
      </button>
      <button onClick={makeComputation}>=</button>
    </div>
  );
};

export default Calculator;
