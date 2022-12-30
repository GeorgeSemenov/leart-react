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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="notMain" element={<NotMain/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
