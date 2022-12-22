import {
  createContext, //Контекст позволяет передавать данные по дереву иерархии , при этом не нужно будет в ручную передавать пропсы от родителя к ребёнку.
  useState
} from "react";

export const AuthContext = createContext(null);//Контекст пока ни для чего использоваться  не будет

const AuthProvider = ({children, ...props})=>{
  const [user,setUser] = useState(null);

  //Метод для регистрации пользователя 
  //Принимает объект "пользователь" и колбэк для регистрации
  const signin = (newUser,cb)=>{
    setUser(newUser);
    cb();
  }

  //Метод для выхода (обратная фукнция регистрации)
  //Принимает колбэк, который и будет выталкивать пользователя из системы
  const signout = (cb)=>{
    setUser(null);
    cb();
  }

  const value={user,signin,signout};

  return  <AuthContext.Provider value={value}>
            {children}
          </AuthContext.Provider>
}

export default AuthProvider;