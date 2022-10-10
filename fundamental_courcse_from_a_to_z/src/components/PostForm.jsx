import React, {useState} from 'react';

function PostForm(props){
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