import {useRouteError} from "react-router-dom";
function ErrorElement() {
  const err = useRouteError();
  return(
    <>
      <h2>status : {err.status}</h2>
      <h3>disc: {err.data.message}</h3>
      {(err.kekPuk) ||
        <h3>kekPuk: {err.data.reason}</h3>
      }
    </>
  )
}
export default ErrorElement;