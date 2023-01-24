import MyButton from '../components/UI/button/MyButton.jsx';
import MyInput from '../components/UI/input/MyInput.jsx';

function Login() {
  return(
    <div>
      <h1>Страница для логинизации</h1>
      <form>
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