import {Routes, 
  Route, 
  Link, 
  Navigate
} from 'react-router-dom';
import Layout from './components/layout.jsx';
import './App.css';

import Notfoundpage from './pages/notFoundPage.jsx';
import About from './pages/about.jsx';
import SomeKek from './pages/someKek.jsx';
import Home from './pages/home.jsx';
import SinglePage from './pages/singlePage.jsx';
import BlockPage from './pages/blockPage.jsx';
import Post from './pages/post.jsx';
import EditPost from './pages/editPost.jsx';
import CreateNewPost from './pages/createNewPost.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RequireAuth from './hoc/RequireAuth.jsx';
import AuthProvider from './hoc/AuthProvider.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="someKek" element={<SomeKek/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="singlePage/:category/:title" element={<SinglePage/>}/>
          <Route path="about/*" element={<About/>}>
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
          <Route path="blockPage" element={<BlockPage/>}/>
          <Route path="posts/:id" element={<Post/>}/>
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
      </Routes>
    </>
  );
}