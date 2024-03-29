import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hook/useAuth";

function RequireAuth({children, ...props}) {
  const location = useLocation();
  // const auth = false;
  const {user} = useAuth();

  if(!user){ //Если аутентификация не пройдена, то перенаправляем
             // На страничку логина, но передаём данные, с какой страницы мы попали в логин, т.к. чтобы потом, после аутентификации мы могли снова вернуться назад
    return <Navigate to="/login" state={{from: location}}/>
    //Мы передаём объект location, т.к. в нём указан путь изначальной страницы, чтобы можно было назад вернуться
  }
  return children
}
export default RequireAuth;