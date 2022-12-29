import BlockFilter from '../components/BlockFilter.jsx';
import {
  Suspense,//Данный кекпонент позволет обрабатывать объекты от лоадеров, которые использовали хелпер defer
} from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  Await,//В этот компонент выкладывается содержимое, которое будет подгружаться со временем
  useLoaderData,//Нужен чтобы извлекать данные из loader'ов
  json
} from 'react-router-dom';

function BlockPage() {
  const {posts} = useLoaderData();
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
        <Suspense fallback={<h2>...Loading</h2>}>
          <Await resolve={posts}>
            {
              (resolvedPosts)=>{
              return(
                <>{
                  resolvedPosts.filter(
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
                }</>
              )}
            }
          </Await>
        </Suspense>
      </ul>
    </div>
  )
}
export default BlockPage;

const getPosts = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/postsеы")
  // if(!res.ok){
  //   throw new Response(
  //     "Текстовое сообщение, которое попадёт в body",
  //     {
  //       status: res.status,//Тут можно указать статус, или взять этот статус из объекта res
  //       statusText: "Something goes wrong"//Если тут напишешь русский текст, то Respons создастся с ошибкой, поэтому не надо
  //     }
  //   )
  // }
  return res.json();
}

const blockLoader = async ({request,params})=>{
  const posts = getPosts();
  if(!posts.length){
    throw json(
      {message:" not found", reason:"wrong URL" }, 
      {status: 404}
    )
  }
  return {
    posts
  }
}

export {blockLoader};