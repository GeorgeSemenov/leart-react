import {Link,Outlet} from "react-router-dom";
import {MyContext} from "../components/Context.js"
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
      <MyContext.Provider 
        value="Просто ты голубь"
      >
        <Outlet/>
      </MyContext.Provider>
    </div>
  )
}

export default NotMain;