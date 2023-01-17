import logo from './logo.svg';
import './App.css';
import {
  Link,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './components/Layout.jsx';
import Main from './pages/Main.jsx';
import NotMain from './pages/NotMain.jsx';
import Posts, {postsLoader} from './pages/Posts.jsx';
import Post from './pages/Post.jsx';
import ErrorElement from './pages/ErrorElement.jsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="notMain" element={<NotMain/>}>
        <Route path="kek" element={<p>Это же настоящий КЕК!</p>}/>
        <Route path="puk" element={<p>Ну и кто испортил воздух?</p>}/>
      </Route>
      <Route path="posts" element={<Posts/>} loader={postsLoader} errorElement={<ErrorElement/>}/>
      <Route path="posts-all" element={<Navigate to="/posts" replace state={{from:"kek puk from from"}}/>} />
      <Route path="posts/:id" element={<Post/>} />
    </Route>
  ));

function App() {
  return (
    <>
      <RouterProvider router={router}/>  
    </>
  );
}

export default App;
