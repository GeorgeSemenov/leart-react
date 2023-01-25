import {useContext} from "react";
import {MyContext} from "../components/Context.js"

function ContextText() {
  const context = useContext(MyContext);
  return(
    <p>Проверка контекста, сюда переданны данные - <b>{context}</b></p>
  )
}
export default ContextText;