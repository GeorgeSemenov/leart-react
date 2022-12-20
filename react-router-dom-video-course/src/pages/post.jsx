import {
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function Post() {
  const {id} = useParams();
  const navigate = useNavigate(); //Хук возвращает функцию ,которую мы и будем использовать.
  const goBack = () => navigate("/blockPage",{state: "it's my state, baby"}); //Создаём новую функцию ,которая будет вызывать navigate со специальными атрибутами. Можно указать напрямую относительный путь, но это мало чем отличается от Link, но если указывать отрицательные цифры, (-1, -2 ...) то он вернётся ну указанное количество страниц назад. Если же нужно указать движение вперёд, то нужно указывать положительные цифири

  return(
    <div>
      <button
        onClick = {()=>goBack()}
      >
        Go v zad
      </button>
      Привет, это пост.
      id данного поста = {id}
      <Link to={`edit`}>
        Редактировать.
      </Link>
    </div>
  )
}

export default Post;