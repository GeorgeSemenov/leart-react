import './App.css';
import React, {useState} from 'react';
import SimpleButton from './components/UI/button/SimpleButton.jsx';

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      {counter}
      <SimpleButton
        onClick={()=>{console.log('func run');setCounter(counter+1)}}
      >
        +
      </SimpleButton>
      <SimpleButton
        onClick={()=>{setCounter(counter-1)}}
      >
        -
      </SimpleButton>

    </div>
  );
}

export default App;
