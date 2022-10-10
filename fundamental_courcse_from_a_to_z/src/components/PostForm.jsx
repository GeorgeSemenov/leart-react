import React, {useState} from 'react';
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

function PostForm({addNewPostToPosts, ...props}){
  const [post,setPost] = useState({title: '', body:''})
  const addNewPost = (e)=>{
    e.preventDefault();
    addNewPostToPosts({...post, id: Date.now()})
    setPost({title: '', body: ''})//обнуляем инпуты
  }
  return(
    <form>
      {/*управляемый элемент*/}
      <MyInput 
        type="text" 
        placeholder="Название поста" 
        value = {post.title}
        onChange={(e)=>{setPost({...post, title:e.target.value})}}
      />
      {/*Неуправляемый элемент*/}
      <MyInput 
        type="text" 
        placeholder="Описание поста"
        value= {post.body}
        onChange={(e)=>{setPost({...post, body:e.target.value});}}
      />
      <MyButton 
        onClick = {(e)=>{addNewPost(e)}}
      >Ужасающий текст занудного создания поста </MyButton>
    </form>
  )
}

export default PostForm;