import React, { useState } from 'react';
import '../CSS/calculator.css';

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [prevOperand, setprevOperand] = useState('');
  const [thirdOperand, setThirdOperand] = useState('');
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
    setThirdOperand('');
  };
  const handleOperand = (e) => {
    if (currentOperand !== '') {
      setprevOperand(currentOperand);
      setResult('');
    }
    const { value } = e.target;
    setprevOperand(currentOperand);
    setCurrentOperand('');
    setOperand(value);
  };
  const makeComputation = () => {
    let result;
    switch (operand) {
      case '/':
        result = Number(prevOperand) / Number(currentOperand);
        setResult(result);
        break;
      case '*':
        result = Number(prevOperand) * Number(currentOperand);
        setResult(result);
        break;
      case '-':
        result = Number(prevOperand) - Number(currentOperand);
        setResult(result);
        break;
      case '+':
        result = Number(prevOperand) + Number(currentOperand);
        setResult(result);
        break;
      default:
        break;
    }
    setThirdOperand(currentOperand);
    setCurrentOperand(result);
  };
  return (
    <div className="calculator">
      <div className="current-operand">{currentOperand}</div>
      <div className="previous-operand">
        {prevOperand}
        {operand}
        {result ? thirdOperand + '=' : ''}
      </div>
      <div className="result"></div>
      <button className="number number-1" value="1" onClick={handleInput}>
        1
      </button>
      <button className="number number-2" value="2" onClick={handleInput}>
        2
      </button>
      <button className="number number-3" value="3" onClick={handleInput}>
        3
      </button>
      <button className="number number-4" value="4" onClick={handleInput}>
        4
      </button>
      <button className="number number-5" value="5" onClick={handleInput}>
        5
      </button>
      <button className="number number-6" value="6" onClick={handleInput}>
        6
      </button>
      <button className="number number-7" value="7" onClick={handleInput}>
        7
      </button>
      <button className="number number-8" value="8" onClick={handleInput}>
        8
      </button>
      <button className="number number-9" value="9" onClick={handleInput}>
        9
      </button>
      <button className="number number-0" value="0" onClick={handleInput}>
        0
      </button>
      <button className="number number-dot" value="." onClick={handleInput}>
        .
      </button>
      <button className="all-clear" onClick={allClear}>
        AC
      </button>
      <button
        className="operand operand-divide"
        value="/"
        onClick={handleOperand}
      >
        /
      </button>
      <button
        className="operand operand-multiply"
        value="*"
        onClick={handleOperand}
      >
        *
      </button>
      <button
        className="operand operand-subtract"
        value="-"
        onClick={handleOperand}
      >
        -
      </button>
      <button className="operand operand-add" value="+" onClick={handleOperand}>
        +
      </button>
      <button className="operand operand-equals" onClick={makeComputation}>
        =
      </button>
    </div>
  );
};

export default Calculator;
