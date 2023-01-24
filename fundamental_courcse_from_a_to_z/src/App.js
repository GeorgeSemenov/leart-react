import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import {publicRouter, privateRouter} from './router/index.js';
import {AuthContext} from './context';

function App() {
  const [isAuth,setIsAuth] = useState(false)
  return(
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      <RouterProvider router={isAuth? privateRouter: publicRouter}/>
    </AuthContext.Provider>
  )
}

export default App;