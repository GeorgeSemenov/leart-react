import {useState, useEffect} from "react";
import {
  Link,
  useLocation,
} from 'react-router-dom';

function BlockPage() {
  console.log(useLocation());
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>{
          setPosts(data);
        })
  },[])
  return(
    <div>
      Это же блокПэйдж!
      <ul>
        <li>
          <Link to="/posts/new">
            Создать новый пост
          </Link>
        </li>
        {
          posts.map(post=>
            <li>
              <Link 
                to={`/posts/${post.id}`} 
                key={post.id}
              >
                {post.title}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default BlockPage;