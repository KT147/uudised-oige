import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(json=> setPosts(json))
  }, []);

  return (
    <div>
      {posts.map(post=>
      <div key={post.body}>
        <div><i>{post.userId}</i></div>
        <div><u>{post.id}</u></div>
        <div><b>{post.title}</b></div>
        <div>{post.body}</div>
        <Link to={"/kasutaja-postitus/" + post.userId}><button>Kõik kasutaja postitused</button></Link>
        <Link to={"/yks-postitus/" + post.id}><button>Vaata postitust</button></Link>
        </div>
      )}
    </div>
  )
}

export default Avaleht;