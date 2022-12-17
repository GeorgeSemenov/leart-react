import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function BlockPage() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch(https://jsonplaceholder.typicode.com/posts)
      .then(res=>{
        console.log(JSON.stringify(res));
        console.log(res.json())
        setPosts(res.json)
      })
  },[])
  return(
    <div>
    </div>
  )
}

export default BlockPage;