import {useState, useEffect} from "react";
import {useParams,Link} from "react-router-dom";

function Posts() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  })
  return(
    <>
      <h1>Посты</h1>
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