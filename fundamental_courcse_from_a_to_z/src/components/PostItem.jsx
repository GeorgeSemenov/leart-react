import React, {useState} from 'react';

function PostItem(props){
  return(
    <div className = "post">
      <div className = "post__content">
        <strong>{props.post.id}.{props.post.title}</strong>
        <p> 
          {props.post.desc}
        </p>
      </div>
      <div className="post__btns">
        <button>Удалить падлу</button>
      </div>
    </div>
  )
}

export default PostItem;