import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Post() {
  const {id} = useParams();
  const [post,setPost] = useState({})
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
  });
  return(
    <>
      <h1>Post с id = {id}</h1>
      <h2>{post.title}</h2>
      <p>
        {post.body}
      </p>
    </>
  )
}
export default Post;