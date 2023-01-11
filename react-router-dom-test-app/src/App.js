import logo from './logo.svg';
import './App.css';
import {
  Link,
  Routes,
  Route,
  Navigate
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
          <Route path="notMain" element={<NotMain/>}>
            <Route path="kek" element={<p>Это же настоящий КЕК!</p>}/>
            <Route path="puk" element={<p>Ну и кто испортил воздух?</p>}/>
          </Route>
          <Route path="posts" element={<Posts/>} />
          <Route path="posts-all" element={<Navigate to="/posts" replace state={{from:"kek puk from from"}}/>} />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
