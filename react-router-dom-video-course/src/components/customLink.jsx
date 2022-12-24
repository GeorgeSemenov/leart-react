import {
  Link,
  useMatch //Хук, который поможет определить - является ли ссылка активной или нет.
} from "react-router-dom";

const CustomLink = ({children,to,...props})=>{
  const match = useMatch({
    path: to,
    end: to.length === 1
  });
  return(
    <Link
      {...props}
      className = {match?"active":""}
      to={to}
    >
      {children}
    </Link>
  )
}

export default CustomLink;  