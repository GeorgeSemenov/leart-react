import {Form} from 'react-router-dom';
const NewPost = ()=>{
  return(
    <Form action = "/posts/new" method="post">
      <label>
        Title:
        <input type="text" name="title">
      </label>
      <label>
        Body:
        <input type="text" name="body">
      </label>
      <input type="hidden" name="userId" value="1"/>
      <input type="submit" name="userId" value="add post"/>
    </Form>
  )
}
export default NewPost;