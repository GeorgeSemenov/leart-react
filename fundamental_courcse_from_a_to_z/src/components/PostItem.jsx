import React, {useState} from 'react';
import MyButton from './UI/button/MyButton'

function PostItem({removePostFromPosts,...props}){
  const removePost = ()=>{
    removePostFromPosts(props.post)
  }
  return(
    <div className = "post">
      <div className = "post__content">
        <strong>{props.number}.{props.post.title}</strong>
        <p> 
          {props.post.body}
        </p>
      </div>
      <div className="post__btns">
        <MyButton
          onClick ={()=>{removePostFromPosts(props.post)}}
        >Удалить падлу</MyButton>
      </div>
    </div>
  )
}

export default PostItem;