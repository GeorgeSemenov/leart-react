import React, {useState,useRef,useMemo, useEffect} from 'react';
import Counter from './components/Counter.jsx';
import ClassCounter from './components/ClassCounter.jsx';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostFilter from './components/PostFilter.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import MyModal from './components/UI/MyModal/MyModal.jsx'
import Loader from './components/UI/Loader/Loader.jsx';
import Pagination from './components/UI/Pagination/Pagination.jsx';
import {usePosts} from './hooks/usePosts.js';
import {useFetching} from './hooks/useFetching.js';
import axios from 'axios';
import PostService from './API/PostService.js';
import {getPageCount} from './utils/pages.js';

import './styles/App.css';

function App() {
  const [posts,setPosts] = useState([]) ;
  const [modal,setModal] = useState(false);
  const [totalPages,setTotalPages] = useState(0);
  const [filter,setFilter] = useState({sort:'',query:''}) ;
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);//это номер страницы
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit,page)=>{
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount,limit))
  })

  useEffect(()=>{
    fetchPosts(limit,page);
  },[page]);

  const bodyInputRef = useRef();
    
  const addNewPostToPosts = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePostFromPosts = (post)=>{
    setPosts(posts.filter((item)=>{return item.id !==post.id}))
  }

  const changePage = (page)=>{
    setPage(page);
    fetchPosts(limit,page);
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
      {postError &&
        <h1>Произошола обшибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "50"}}>
            <Loader/>
          </div>
        : <PostList
            posts={sortedAndSearchedPosts}
            title="Спиське постой"
            removePostFromPosts = {removePostFromPosts}
          />
      }
      <Pagination
        page = {page}
        changePage = {changePage}
        totalPages = {totalPages}
      />
    </div>
  );
}

export default App;