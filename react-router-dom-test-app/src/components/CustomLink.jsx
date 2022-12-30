import {
  Link,
  useMatch
} from "react-router-dom";

function CustomLink({to,children}) {
  const match = useMatch(to);
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