import {
  useState, 
  useEffect,
  Suspense,
} from "react";
import {useParams,
  Link, 
  useLocation,
  useSearchParams,
  useLoaderData,
  Await,
  defer,
  json,
} from "react-router-dom";

function Posts() {
  const {posts} = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [query,setQuery] = useState('')
  let searchQuery = searchParams.get("searchQueary") ;

  return(
    <>
      <h1>Посты</h1>
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          const form = e.target;
          setSearchParams({
            "searchQueary":form.search.value,
            "isLatest": form.last.checked
          });
        }}
      >
        <input
          type="search"
          name="search"
          value = {query}
          onChange = {(e)=>setQuery(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            name="last"
          />
          last 60 posts
        </label>
        <input
          type="submit"
          value="search monthfucker"
        />
      </form>
      <Suspense fallback={<p>Подгружаем посты для геев</p>}>
        <Await resolve={posts}>
          {(resolvedPosts)=>{
            console.log(`resolvedPosts = ${resolvedPosts[0].title}`);
            return (
              <ul>
                {
                  resolvedPosts
                  .filter(post=>post.title.includes(query))
                  .map(post=>
                    <li>
                      <Link to={`${post.id}`}>
                        {post.title}
                      </Link>
                    </li>
                  )
                }
              </ul>
              )
            }
          }
        </Await>
      </Suspense>
    </>
  )
}
export default Posts;

async function postsLoader(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts11");
  if (!res.ok){
    throw json(
      {
        message: "Обшибка kek kek puk puk",
        reason: "Обисание обшибкэ"
      },
      {status: res.status},
    )
  }
  const posts = await res.json();
  return defer({posts});
}
export {postsLoader};