import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import {publicRouter, privateRouter} from './router/index.js';
import {AuthContext} from './context';

function App() {
  let isAuth = false;
  return(
    <AuthContext.Provider>
      <RouterProvider router={isAuth? privateRouter: publicRouter}/>
    </AuthContext.Provider>
  )
}

export default App;