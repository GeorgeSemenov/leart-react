import React, {useState,useRef} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostForm from './components/PostFrom.jsx'
import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([
    {id:1, title: "JS-post-title", body: "JavaScript - is programm language"},
    {id:2, title: "php-post-title", body: "php - is programm language"},
    {id:3, title: "python-post-title", body: "python - is programm language"},
  ])
const [post,setPost] = useState({title: '', body:''})
const bodyInputRef = useRef();
const addNewPost = (e)=>{
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    setPosts([...posts,{...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }
  return (
    <div className="App">
      <PostForm/>
      <PostList
        posts={posts}
        title="Спиське постой"
      />      
    </div>
  );
}

export default App;
