import {useState, useEffect} from "react";
import {useParams,Link, useLocation,useSearchParams} from "react-router-dom";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [posts,setPosts] = useState([]);
  const [query,setQuery] = useState('')
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
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
      <ul>
        {posts
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
    </>
  )
}
export default Posts;