import React, { useState } from 'react';
import './styles/styles.css';
import Buttons from './Buttons';
import Display from './Display';

function App() {
  const [sum, setSum] = useState('');

  const handleClick = e => {
    setSum(sum + e.target.value);
  };

  const handleEquals = () => {
    let result = eval(sum);
    setSum(result);
  };

  const handleClear = () => {
    setSum('');
  };

  return (
    <>
      <div className="container">
        <form className="calculator">
          <div>
            <Display sum={sum} />
          </div>
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
