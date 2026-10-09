import React from 'react';
import { useState } from 'react';

const App = () => {

let [count, setCount] = useState(0)


  function increment() {
    setCount(count + 1);
    console.log("Counter:", count);
  }

  function decrement() {
    setCount(count - 1);
    console.log("Counter:", count);
  }

  return (
    <div>
      <h1>COUNTER APPLICATION</h1>
      <h2>Counter: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;