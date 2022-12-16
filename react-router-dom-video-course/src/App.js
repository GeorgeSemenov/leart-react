import {Routes, Route} from 'react-router-dom';

import Notfoundpage from './pages/notFoundPage.jsx';
import About from './pages/about.jsx';

export default function App() {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/posts">Blog</a>
        <a href="/about">About</a>
      </header>
      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
    </>
  );
}