import MyButton from '../components/UI/button/MyButton.jsx';
import MyInput from '../components/UI/input/MyInput.jsx';
import {useContext} from "react";
import {AuthContext} from '../context';

function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = event=>{
    event.preventDefault();
  }
  return(
    <div>
      <h1>Страница для логинизации</h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="Введите ваше имя"
        />
        <MyInput
          type="password"
          placeholder="Введите пуароль"
        />
        <MyButton>
          Войти(без гейства)
        </MyButton>
      </form>
    </div>
  )
}
export default Login;