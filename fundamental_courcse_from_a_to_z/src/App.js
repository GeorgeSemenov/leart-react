import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {RouterProvider} from 'react-router-dom';
import AppRouter from './router'
import {AuthContext} from './context';

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }//else писать не нужно, т.к. isAuth по умолчанию false
    setIsLoading(false);
  },[]);
  return(
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <AppRouter/>      
    </AuthContext.Provider>
  )
}

export default App;