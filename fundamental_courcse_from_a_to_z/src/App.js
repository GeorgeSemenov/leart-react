import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import {publicRouter, privateRouter} from './router/index.js';

function App() {
  let isAuth = false;
  return(
    <RouterProvider router={isAuth? privateRouter: publicRouter}/>
  )
}

export default App;