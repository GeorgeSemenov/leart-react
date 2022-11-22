import React, {useState} from 'react';
import PostItem from './PostItem.jsx';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const PostList = ({posts,title, removePostFromPosts})=>{
  if(!posts.length){
    return(<h2 style={{textAlign: "center"}}> Посты Взадкончились.</h2>)
  }
  return(
    <div className = "postList">
      <h1 style = {{textAlign: "center"}}>{title}</h1>
      <TransitionGroup>
      {
        posts.map((post,index)=>
          <CSSTransition
              key = {post.id}
              timeout={500}
              classNames="post"
          >
            <PostItem
              number = {index + 1}
              post={post}
              removePostFromPosts = {removePostFromPosts}
            />
          </CSSTransition>
        )
      }
      </TransitionGroup>
    </div>
  )
}

export default PostList;