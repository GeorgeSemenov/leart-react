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
} from "react-router-dom";

function Posts() {
  const posts = useLoaderData();
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
      <Suspense fallback={<p>Подгружаем посты</p>}>
        <Await resolve={posts}>
          <ul>
            {(resolvedPosts)=>{
              return
                <>
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
                }</>
              }
            }
          </ul>
        </Await>
      </Suspense>
    </>
  )
}
export default Posts;

async function postsLoader(){
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  return posts;
}
export {postsLoader};