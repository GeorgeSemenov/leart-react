import {useState, useEffect} from "react";
import {useParams,Link, useLocation,useSearchParams} from "react-router-dom";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  const query = searchParams.get("post") ;
  console.log(`query = ${query}`);
  return(
    <>
      <h1>Посты</h1>
      <form
        onSubmit={(e)=>{
          e.preventDefault();
          const form = e.target;
          setSearchParams({"searchQueary":form.search.value});
        }}
      >
        <input
          type="search"
          name="search"
          onChange = {(e)=>(query.searchQueary = e.target.value)}
          value={query? (query.searchQueary || ""):""}
        />
        <input
          type="submit"
          value="search monthfucker"
        />
      </form>
      <ul>
        {posts.map(post=><li>
          <Link to={`${post.id}`}>
            {post.title}
          </Link>
        </li>)}
      </ul>
    </>
  )
}
export default Posts;