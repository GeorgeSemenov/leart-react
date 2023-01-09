import logo from './logo.svg';
import './App.css';
import {
  Link,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './components/Layout.jsx';
import Main from './pages/Main.jsx';
import NotMain from './pages/NotMain.jsx';
import Posts from './pages/Posts.jsx';
import Post from './pages/Post.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="notMain" element={<NotMain/>}/>
          <Route path="posts" element={<Posts/>} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
