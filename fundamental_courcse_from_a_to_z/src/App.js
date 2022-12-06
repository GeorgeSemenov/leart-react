import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './pages/About.jsx';

function App() {
  return(
    <BrowserRouter>
      <Route exact path="/about" element = {<About/>}/>
    </BrowserRouter>
  )
}

export default App;