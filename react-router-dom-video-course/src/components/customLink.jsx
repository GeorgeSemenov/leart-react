import {
  Link,
  useMatch //Хук, который поможет определить - является ли ссылка активной или нет.
} from "react-router-dom";

const CustomLink = ({children,to,...props})=>{
  const match = useMatch(to);//Возвращает true если адрес в браузерной строке совпадает с адресом внутри атирбута to компонента Link  
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