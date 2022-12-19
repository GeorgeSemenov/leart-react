import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function BlockPage() {
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