import {
  Link,
  Outlet
} from "react-router-dom";
import MyButton from './UI/button/MyButton.jsx';
import {AuthContext} from "../context";
import {useContext} from "react";

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = ()=>{
    setIsAuth(false);
    localStorage.removeItem("auth");
  }
  return(
    <>
      <nav className = "navbar">
        <MyButton
          onClick = {logout}
        >
          Выйти нахрен
        </MyButton>
        <div className="navbar__links">
          <Link to="/posts">Пысты мазафака</Link>
          <Link to="/about">Чо чо оппа about</Link>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}
export default Navbar;