import React, { useState } from 'react';
import './styles/styles.css';
import Buttons from './Buttons';
import Display from './Display';

function App() {
  const [sum, setSum] = useState('');

  const handleClick = e => {
    switch (e) {
      case '.':
        setSum(sum + e.target.value);
        break;
      default:
        setSum(sum + e.target.value);
    }
  };

  const handleEquals = () => {
    let result = eval(sum);
    setSum(result);
  };

  const handleClear = () => {
    setSum('0');
  };

  return (
    <>
      <div className="container">
        <form className="calculator">
          <Display sum={sum} />
          <Buttons
            handleClick={handleClick}
            handleClear={handleClear}
            handleEquals={handleEquals}
          />
        </form>
      </div>
    </>
  );
}

export default App;
