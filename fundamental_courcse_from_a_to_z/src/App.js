import React, {useState,useRef,useMemo} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import MyModal from './components/UI/MyModal/MyModal.jsx'
import {usePosts} from './hooks/usePosts.js';
import axios from 'axios';

import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([
    // {id:1, title: "JS-post-title", body: "JavaScript - is programm language"},
    // {id:2, title: "php-post-title", body: "python - is programm language"},
    // {id:3, title: "python-post-title", body: "php - is programm language"},
  ]) 
  const [modal,setModal] = useState(false)
  const [filter,setFilter] = useState({sort:'',query:''}) 
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query);
  const bodyInputRef = useRef();
    
  const addNewPostToPosts = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false);
  }

  async function fetchPosts(){//Функция асинхронная, чтобы можно было использовать await
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  const removePostFromPosts = (post)=>{
    setPosts(posts.filter((item)=>{return item.id !==post.id}))
  }

  return (
    <div className="App">
      <button onClick = {fetchPosts}>GET POSTS</button>
      <MyButton
        style={{marginTop: "30px"}}
        onClick = {()=>setModal(true)}
      >
        Создать пыст.
      </MyButton>
      <MyModal
        visible={modal}
        setVisible = {setModal}
      >
        <PostForm
          addNewPostToPosts = {addNewPostToPosts}
        />
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Спиське постой"
        removePostFromPosts = {removePostFromPosts}
      />
    </div>
  );
}

export default App;