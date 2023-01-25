import {Link,Outlet} from "react-router-dom";
function NotMain() {
  
  return(
    <div>
      <h1>Это не главная страница</h1>
      <ul>
        <li>
          <Link to="kek">kek</Link>
        </li>
        <li>
          <Link to="puk">puk</Link>
        </li>
        <li>
          <Link to="contextTest">contextTest srak srak</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default NotMain;