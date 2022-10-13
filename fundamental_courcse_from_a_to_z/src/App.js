import React, {useState,useRef,useMemo} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostFilter from './components/PostFilter.jsx'

import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([
    {id:1, title: "JS-post-title", body: "JavaScript - is programm language"},
    {id:2, title: "php-post-title", body: "python - is programm language"},
    {id:3, title: "python-post-title", body: "php - is programm language"},
  ])  
  const [filter,setFilter] = useState({sort:'',query:''}) 
  
  const bodyInputRef = useRef();

  function getSortedPosts(){
    console.log(`getSortedPosts called`);
    if(filter.query){
      return [...posts].sort((a,b)=>{
        return a[filter.sort].localeCompare(b[filter.sort])
      })
    }
    else{
      return posts
    }
  }

  const sortedPosts   = useMemo(getSortedPosts,[filter.query, posts]);
  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,sortedPosts])

  const addNewPostToPosts = (newPost)=>{
    setPosts([...posts,newPost])
  }

  const removePostFromPosts = (post)=>{
    setPosts(posts.filter((item)=>{return item.id !==post.id}))
  }
  return (
    <div className="App">
      <PostForm
        addNewPostToPosts = {addNewPostToPosts}
      />
      <hr style={{margin: "15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        sortedAndSearchedPosts.length !=0 
          ?
          <PostList
            posts={sortedAndSearchedPosts}
            title="Спиське постой"
            removePostFromPosts = {removePostFromPosts}
          />    
          : 
          <h2 style={{textAlign: "center"}}> Посты Закончились.</h2>
      }
            
    </div>
  );
}

export default App;