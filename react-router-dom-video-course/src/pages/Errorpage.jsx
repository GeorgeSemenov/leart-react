import {
  useRouteError,
  isRouteErrorResponse
} from "react-router-dom";

function Errorpage() {
  const error = useRouteError();
  if(isRouteErrorResponse(error)){//Если произошла ошибка на уровне маршрутизации, то вывести такую разметку
    return(
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.message || "it's not a gay club"}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    )
  }
  //Если же ошибка не на уровне маршрутизации, то пробросить её дальше
  throw error
}
export default Errorpage;