import {useNavigate, useLocation} from "react-router-dom";

function LoginPage({children,...props}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  return(
    <div
      {...props}
    >
      {children}
    </div>
  )
}

export default LoginPage;