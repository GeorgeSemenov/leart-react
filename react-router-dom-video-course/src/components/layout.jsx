import {
  Outlet
} from 'react-router-dom'
import CustomLink from "./customLink.jsx";

const Layout = function () {
  const setActive =({isActive})=>isActive?'active-link':'';
  return(
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/someKek">SomeKek</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main>
        <Outlet/>{/*Указываем место, куда подгружать дочерний элемент*/}
      </main>
      <footer>2022</footer>
    </>
  )
}

export default Layout;