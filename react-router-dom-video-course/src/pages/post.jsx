import {useParams} from "react-router-dom";
function Post() {
  const {id} = useParams();
  return(
    <div>
      Привет, это пост.
      id данного поста = {id}
    </div>
  )
}

export default Post;