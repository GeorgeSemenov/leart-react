import {
  Link,
  useParams
} from "react-router-dom";

function EditPost() {
  const {id} = useParams();  
  return(
    <div>
      <h2>Редактируй меня полностью</h2>
      <h6>Если сможешь</h6>
      У этого поста есть только id = {id}
    </div>
  )
}

export default EditPost;