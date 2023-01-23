import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import About from '../pages/About.jsx';
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import Error from '../pages/Error.jsx';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} errorElement={<Navigate to="/error"/>}>
      <Route path="/about" element = {<About/>}/>
      <Route path="/posts" element = {<Posts/>}/>
      <Route path="/posts/:id" element = {<Post/>}/>
      <Route path="/error" element = {<Error/>}/>
    </Route>
  )
);