import React, {useState} from 'react';
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'

function PostItem({removePostFromPosts,post,...props}){
  const removePost = ()=>{
    removePostFromPosts(post)
  }
  const navigate = useNavigate();
  return(
    <div className = "post">
      <div className = "post__content">
        <strong>{post.id}.{post.title}</strong>
        <p> 
          {post.body}
        </p>
      </div>
      <div className="post__btns">
        <MyButton
          onClick ={()=>{navigate(`/posts/${post.id}`)}}
        >Открыть
        </MyButton>
        <MyButton
          onClick ={()=>{removePostFromPosts(post)}}
        >Удалить падлу
        </MyButton>
      </div>
    </div>
  )
}

export default PostItem;