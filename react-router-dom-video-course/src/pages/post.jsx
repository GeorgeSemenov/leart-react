import {
  Link,
  useNavigate,
  useLoaderData,
  defer // этот элемент позволяет ожидать долгозагружаемые части компонента, в то время как остальные части компонента уже подгрузились.
} from "react-router-dom";

function Post() {
  const {id,post} = useLoaderData();
  const navigate = useNavigate(); //Хук возвращает функцию ,которую мы и будем использовать.
  const goBack = () => navigate("/blockPage",{state: "it's my state, baby"}); //Создаём новую функцию ,которая будет вызывать navigate со специальными атрибутами. Можно указать напрямую относительный путь, но это мало чем отличается от Link, но если указывать отрицательные цифры, (-1, -2 ...) то он вернётся ну указанное количество страниц назад. Если же нужно указать движение вперёд, то нужно указывать положительные цифири

  return(
    <div>
      <button
        onClick = {()=>goBack()}
      >
        Go v zad
      </button>
      Привет, это пост 
      <h1>{post.title}</h1>
      id данного поста = {id}
      <p>{post.body}</p>
      <Link to={`edit`}>
        Редактировать.
      </Link>
    </div>
  )
}

export default Post;

const postLoader = async ({params})=>{
  const id = params.id;//Поле id - это имя динамической переменной, указанной в таблице маршрутизации
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json();
  return {id,post};
}
export {postLoader};