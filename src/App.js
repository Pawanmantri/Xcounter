import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div className="counter-display">
          Count: {count}
        </div>
        <div className="button-group">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
