import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Login from '../pages/Login.jsx';
import About from '../pages/About.jsx';
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import Error from '../pages/Error.jsx';
import {AuthContext} from '../context';
import {useContext} from "react";

const privateRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} errorElement={<Navigate to="/error"/>}>
      <Route path="/about" element = {<About/>}/>
      <Route path="/posts" element = {<Posts/>}/>
      <Route path="/posts/:id" element = {<Post/>}/>
      <Route path="/error" element = {<Error/>}/>
    </Route>
  )
);

const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} errorElement={<Navigate to="/login"/>}>
      <Route path="/login" element={<Login/>} errorElement={<Navigate to="/login"/>}/>
    </Route>
  )
);

export default function AppRouter(){
  const {isAuth} = useContext(AuthContext);
  return(
    <RouterProvider router={isAuth? privateRouter: publicRouter}/>
  )
}