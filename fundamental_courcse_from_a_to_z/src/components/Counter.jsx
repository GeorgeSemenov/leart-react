import React, {useState} from 'react';

const Counter = function(){
  const [counter,setCounter] = useState(0);

  function incFunc(){
    setCounter(counter+1)
    console.log(`counter = ${counter}`);
  }
  function decFunc(){
    setCounter(counter-1)
    console.log(`counter= ${counter}`)
  }

  return (
    <div>
      <h1> count = {counter}</h1>
      <button onClick={incFunc}>Increment</button>
      <button onClick={decFunc}>Decrement</button>
    </div>
  )
}

export default Counter;