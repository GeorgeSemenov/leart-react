import React, {useState} from 'react';
import PostItem from './PostItem.jsx';

const PostList = ({posts,title, removePostFromPosts})=>{
  return(
    <div className = "postList">
      <h1 style = {{textAlign: "center"}}>{title}</h1>
      {
        posts.map((post,index)=>
          <PostItem
            number = {index + 1}
            post={post}
            key = {post.id}
            removePostFromPosts = {removePostFromPosts}
          />
        )
      }
    </div>
  )
}

export default PostList;