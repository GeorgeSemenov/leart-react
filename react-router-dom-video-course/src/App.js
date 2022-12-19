import {Routes, Route, Link} from 'react-router-dom';
import Layout from './components/layout.jsx';
import './App.css';

import Notfoundpage from './pages/notFoundPage.jsx';
import About from './pages/about.jsx';
import SomeKek from './pages/someKek.jsx';
import Home from './pages/home.jsx';
import SinglePage from './pages/singlePage.jsx';
import BlockPage from './pages/blockPage.jsx';
import Post from './pages/post.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="someKek" element={<SomeKek/>}/>
          <Route path="singlePage/:category/:title" element={<SinglePage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blockPage" element={<BlockPage/>}/>
          <Route path="posts/:id" element={<Post/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </>
  );
}