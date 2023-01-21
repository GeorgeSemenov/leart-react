import React, {useState,useRef,useMemo, useEffect} from 'react';
import './styles/App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Posts from "./pages/Posts.jsx";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route path="/about" element = {<About/>}/>
    </Route>
  )
);

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;