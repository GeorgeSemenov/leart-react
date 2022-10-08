import React, {useState} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([
    {id:1, title: "JS-post-title", desc: "JavaScript - is programm language"},
    {id:2, title: "php-post-title", desc: "php - is programm language"},
    {id:3, title: "python-post-title", desc: "python - is programm language"},
  ])
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Ужасающий текст занудного создания поста </MyButton>
      </form>
      <PostList
        posts={posts}
        title="Спиське постой"
      />      
    </div>
  );
}

export default App;
