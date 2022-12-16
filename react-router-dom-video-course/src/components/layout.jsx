import {
  NavLink,
  Outlet//Импортируем  Outlet
} from 'react-router-dom'


const Layout = function () {
  const setActive =({isActive})=>isActive?'active-link':'';
  return(
    <>
      <header>
        <NavLink className={setActive} to="/">Home</NavLink>
        <NavLink className={setActive} to="/someKek">SomeKek</NavLink>
        <NavLink className={setActive} to="/about">About</NavLink>
      </header>
      <main>
        <Outlet/>{/*Указываем место, куда подгружать дочерний элемент*/}
      </main>
      <footer>2022</footer>
    </>
  )
}

export default Layout;