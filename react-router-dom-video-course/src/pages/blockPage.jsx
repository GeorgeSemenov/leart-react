import {useState, useEffect} from "react";
import {
  Link,
  useLocation,
  useSearchParams
} from 'react-router-dom';

function BlockPage() {
  console.log(useLocation());
  const [posts,setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  //Запрос выше должен быть типа: url.ru/post?post=someGetParams&data=someParams
  //ты получишь объект с данными {post: someGetParams, data: someParams}
  
  const latest = searchParams.has('latest');
  //это булев, если чекбокс"latest" будет нажат, то параметры строки
  //изменятся и latest станет равен true

  const startFrom = latest? 50 : 1;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;//записываем данные всей формы в переменную

    const query = form.search.value; //т.к. мы в форме указали input с name search, то теперь мы можем оттуда доставать данные
    const isLatest = form.latest.checked;//Также проверяем форму на предмет нажатия чекбокса и записываем эти данные в переменную.

    const params = {};

    if(query.length) params.post = query; //Если запрос существует (его длина больше нуля символов) то записываем в params
    if(isLatest) params.latest = true;

    setSearchParams(params)//Изменяем адресную строку - теперь она будет хранить запрос внутри адресной строки.
    //Т.к. мы изменили адресную строку, то значит и изменили переменную postQuery
  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>{
          setPosts(data);
        })
  },[])
  return(
    <div>
      Это же блокПэйдж!
      <form 
        autoComplete="off"
        onSubmit = {handleSubmit}
      >
        <input type="search" name="search"/>
        <label>
          <input type="checkbox" name="latest"></input>
          New only
        </label>
        <input type="submit" value="search"/>
      </form>
      <ul>
        <li>
          <Link to="/posts/new">
            Создать новый пост
          </Link>
        </li>
        {
          posts.filter(
            post=>post.title.includes(postQuery) && post.id>=startFrom
          ).map(post=>
            <li>
              <Link 
                to={`/posts/${post.id}`} 
                key={post.id}
              >
                {post.title}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default BlockPage;