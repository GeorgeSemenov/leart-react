import {
  Link,
  useMatch
} from "react-router-dom";

function CustomLink({to,children}) {
  const match = useMatch({
    path:to,
    end: to.length == 1 
  });
  const clsNme = ()=>match?"puktive":"" 
  console.log(`comparison = ${clsNme()}`);
  return(
    <Link 
      to={to}
      className = {clsNme()}
    >
      {children}
    </Link>
  )
}
export default CustomLink;