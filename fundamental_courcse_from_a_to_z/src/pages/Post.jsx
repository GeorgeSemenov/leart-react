import {
  useParams,
  useNavigate,
} from "react-router-dom";
import {useEffect, useState} from "react"
import {useFetching} from "../hooks/useFetching.js"
import MyButton from "../components/UI/button/MyButton.jsx"
import PostService from "../API/PostService.js";
import Loader from "../components/UI/Loader/Loader";

function Post() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [post,setPost] = useState({})
  const [comments,setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(
    async (id) =>{
      const resp = await PostService.getPostById(id);
      setPost(resp.data)
    }
  );

  const [fetchComments, isCommentsLoading, CommentsError] = useFetching(
    async (id) =>{
      const resp = await PostService.getCommentsByPostId(id);
      setComments(resp.data)
    }
  );

  useEffect(()=>{
    fetchPostById(id);
    fetchComments(id);
  },[])

  return(
    <>
      <h1>ты попал на страничку поста, дружок помидорок #{id}</h1>
      {isLoading
        ?<Loader/>
        : <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <MyButton
              onClick = {()=>navigate(-1)}
            >
              взда
            </MyButton>
          </>
      }
      <h2>Кекментарии</h2>
      {
        isCommentsLoading
        ? <Loader/>
        : comments.map(comment=><p>{comment.id} --- {comment.body}</p>)
      }
    </>
  )
}
export default Post;