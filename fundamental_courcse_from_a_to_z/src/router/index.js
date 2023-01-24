import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Login from '../pages/Login.jsx';
import About from '../pages/About.jsx';
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import Error from '../pages/Error.jsx';

export const privateRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} errorElement={<Navigate to="/error"/>}>
      <Route path="/about" element = {<About/>}/>
      <Route path="/posts" element = {<Posts/>}/>
      <Route path="/posts/:id" element = {<Post/>}/>
      <Route path="/error" element = {<Error/>}/>
    </Route>
  )
);

export const publicRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} errorElement={<Navigate to="/login"/>}>
      <Route path="/login" element={<Login/>} errorElement={<Navigate to="/login"/>}/>
    </Route>
  )
);

export const router = isAuth? privateRouter: publicRouter;