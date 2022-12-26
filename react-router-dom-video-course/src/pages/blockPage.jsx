import BlockFilter from '../components/BlockFilter.jsx';
import {
  Suspence,//Данный кекпонент позволет обрабатывать объекты от лоадеров, которые использовали хелпер defer
  Await,//В этот компонент выкладывается содержимое, которое будет подгружаться со временем
} from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  useLoaderData,//Нужен чтобы извлекать данные из loader'ов
  defer // этот элемент позволяет ожидать долгозагружаемые части компонента, в то время как остальные части компонента уже подгрузились.
} from 'react-router-dom';

function BlockPage() {
  const posts = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  //Запрос выше должен быть типа: url.ru/post?post=someGetParams&data=someParams
  //ты получишь объект с данными {post: someGetParams, data: someParams}
  
  const latest = searchParams.has('latest');
  //это булев, если чекбокс"latest" будет нажат, то параметры строки
  //изменятся и latest станет равен true

  const startFrom = latest? 50 : 1;

  return(
    <div>
      Это же блокПэйдж!
      <BlockFilter
        postQuery={postQuery}
        latest = {latest}
        setSearchParams={setSearchParams}
      />
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

const getPosts = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}

const blockLoader = async ({request,params})=>{
  return defer({
    posts: getPosts()
  })
}

export {blockLoader};