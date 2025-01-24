import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function KasutajaPositus() {
    const {index} = useParams()
    const [posts, setPosts] = useState ([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(json=> setPosts(json.filter(post=> post.userId === Number(index))))
      }, [index]);

      return (
        <div>
          {posts.map(post=>
          <div key={post.body}>
            <div><i>{post.userId}</i></div>
            <div><u>{post.id}</u></div>
            <div><b>{post.title}</b></div>
            <div>{post.body}</div>
            </div>
          )}
        </div>
      )
    }

export default KasutajaPositus