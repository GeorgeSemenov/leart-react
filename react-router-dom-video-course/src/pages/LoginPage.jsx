import {useNavigate, useLocation} from "react-router-dom";

function LoginPage({children,...props}) {
  const navigate = useNavigate();
  const location = useLocation();

  //Интересная внизу запись - означает следующее:
  //Если есть у объекта locatation поле state, которое не равно null
  //И у этого поля - есть своё поле - from у которого, в свою очередь есть поле pathname
  //То тогда fromPage будет равнятся этому pathname, в противном случае - будет равнятся корню '/'
  const fromPage = location.state?.from?.pathname || '/';
  
  return(
    <div>
      <h1>login puge</h1>
      {fromPage}
    </div>
  )
}

export default LoginPage;