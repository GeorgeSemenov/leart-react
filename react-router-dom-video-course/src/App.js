import {
  Route, 
  Link, 
  Navigate,
  createBrowserRouter, //Позволяет создать объект route, который будет передан в объект RouterProvider, для создания таблицы марштуризации. 
  createRoutesFromElements,//Позволяет использовать таблицу маршрутизации (написанную на компонентах Route) для создания объекта настроек, который будет использоваться для создания объекта route, который и будет передан в RouterProvider
  RouterProvider, //данный компонент заменит нам компонент Routes, т.к. последний - устарел
} from 'react-router-dom';
import Layout from './components/layout.jsx';
import './App.css';
import Notfoundpage from './pages/notFoundPage.jsx';
import About from './pages/about.jsx';
import SomeKek from './pages/someKek.jsx';
import Home from './pages/home.jsx';
import SinglePage from './pages/singlePage.jsx';
import BlockPage, {blockLoader} from './pages/blockPage.jsx';
import Post, {postLoader} from './pages/post.jsx';
import EditPost from './pages/editPost.jsx';
import CreateNewPost from './pages/createNewPost.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Errorpage from './pages/Errorpage.jsx';
import RequireAuth from './hoc/RequireAuth.jsx';
import AuthProvider from './hoc/AuthProvider.jsx';

//Вначале модуль intersection observer нужно установить 
//npm install react-intersection-observer --save
import {useInView} from "react-intersection-observer";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="someKek" element={<SomeKek/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="singlePage/:category/:title" element={<SinglePage/>}/>
      <Route path="about/" element={<About/>}>
        <Route 
          path="contacts" 
          element={<p>Это же кектакты, ё маё</p>}
         />
        <Route 
          path="team" 
          element={<p>Их двое, а мы одни</p>}
        />
       </Route>
      <Route path="about-us" element={<Navigate to="/about" replace/>}/>
      <Route 
        path="blockPage" 
        element={<BlockPage/>} 
        loader={blockLoader} 
        errorElement={<Errorpage/>}
      />
      <Route path="posts/:id" element={<Post/>} loader = {postLoader}/>
      <Route path="posts/new" element={
        <RequireAuth>
          <CreateNewPost/>
        </RequireAuth>
      }/>
      <Route path="posts/new/edit" element={
        <RequireAuth>
          <CreateNewPost/>
        </RequireAuth>
      }/>
      <Route path="posts/:id/edit" element={
        <RequireAuth>
          <EditPost/>
        </RequireAuth>
      }/>
      <Route path="*" element={<Notfoundpage/>}/>
    </Route>
  ))

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}