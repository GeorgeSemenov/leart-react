import React, {useState} from 'react';
import Counter from './components/Counter.jsx';

function App() {
  const [value, setValue]=useState("empty string");
  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
