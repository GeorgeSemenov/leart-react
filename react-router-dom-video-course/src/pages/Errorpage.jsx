import {useRouteError} from "react-router-dom";

function Errorpage() {
  const error = useRouteError();//Хук, который позволяет получить информацию об ошибке
  return(
    <div>
      <h1>{error.status}</h1>
      <h2>{error.statusText || "Этот текст будет выводиться, если error не владеет полем statusText"}</h2>
    </div>
  )
}
export default Errorpage;