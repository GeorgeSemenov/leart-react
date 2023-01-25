import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import AppRouter from './router'
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
      <AppRouter/>      
    </AuthContext.Provider>
  )
}

export default App;