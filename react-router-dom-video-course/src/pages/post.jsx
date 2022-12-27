import {
  Link,
  useNavigate,
  useLoaderData,
  defer, // этот элемент позволяет ожидать долгозагружаемые части компонента, в то время как остальные части компонента уже подгрузились.
  useAsyncValue, //Этот хук позволяет подгружать данные из компонента Await 
  Await
} from "react-router-dom";

import {Suspense} from "react";

const LoadPost = ()=>{
  const post = useAsyncValue(); //Подгружаем данные из компонента Await
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

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
      <Suspense fallback={<h2>Пук пук загрузка ... пук пук</h2>}>
        <Await resolve={post}>
          <LoadPost/>{/*Отличие от первого метода, в том, что сюда не нужно ничего передавать*/}
        </Await>
      </Suspense>
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

async function getPostById(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json();//обрати внимание, что тут не нужно использовать await, т.к. данные этой функции будут переданы в defer, что уже предполагается, что ответ нужно будет подождать
  //Для сравнения ты можешь посмотреть как получение поста было реализованно в postLoader
}
async function getCommentsByPostId(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return res.json();
}

const postLoader = async ({params})=>{
  const id = params.id;//Поле id - это имя динамической переменной, указанной в таблице маршрутизации
  return defer({
    id, 
    post: getPostById(id),
    comments: getCommentsByPostId(id)
  });
}
export {postLoader};