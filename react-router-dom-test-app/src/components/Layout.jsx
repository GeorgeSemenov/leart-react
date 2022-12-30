import {
  Outlet
} from "react-router-dom";
import CustomLink from './CustomLink.jsx';

function Layout({children,...props}) {
  const setActiveClassName = ({isActive})=>isActive? "kektive":"";
  return(
    <>
      <header>
        <ul>
          <li><CustomLink to="/">Главная</CustomLink></li>
          <li><CustomLink to="/notMain">Неглавная</CustomLink></li>
          <li><CustomLink to="/secondary">Второстепенная</CustomLink></li>
        </ul>
      </header>
      <Outlet/>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default Layout;