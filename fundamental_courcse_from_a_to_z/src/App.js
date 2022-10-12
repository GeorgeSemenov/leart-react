import React, {useState,useRef} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'

import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([
    {id:1, title: "JS-post-title", body: "JavaScript - is programm language"},
    {id:2, title: "php-post-title", body: "python - is programm language"},
    {id:3, title: "python-post-title", body: "php - is programm language"},
  ])
  const [selectedSort, setSelectedSort] = useState('');
  const bodyInputRef = useRef();

  const addNewPostToPosts = (newPost)=>{
    setPosts([...posts,newPost])
  }

  const sortPosts = (sort)=>{
    setPosts([...posts].sort((a,b)=>{
      return a[sort].localeCompare(b[sort])
    }))
    setSelectedSort(sort);
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
      <MySelect
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue = "Сортировка"
        options = {[
          {value:"title", name:"По заголовку"},
          {value:"body", name:"По описанию"}
        ]}
      />
      {
        posts.length !=0 
          ?
          <PostList
            posts={posts}
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