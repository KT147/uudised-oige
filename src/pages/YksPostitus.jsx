import { useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function YksPostitus() {
    const {index} = useParams()
    const [post, setPosts] = useState({})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + index)
        .then(res=> res.json())
        .then(json=> setPosts(json))
    }, [index]);

  return (
    <div>
        <div><i>{post.userId}</i></div>
            <div><u>{post.id}</u></div>
            <div><b>{post.title}</b></div>
            <div>{post.body}</div>
    </div>
  )
}

export default YksPostitus