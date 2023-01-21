import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import router from './components/appRouter.js';

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;