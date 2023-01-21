import {
  Link,
  Outlet
} from "react-router-dom";
function Navbar() {
  return(
    <>
      <nav className = "navbar">
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