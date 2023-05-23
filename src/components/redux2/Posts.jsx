import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector  } from 'react-redux'


export default function Posts() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts?_limit=2").then(response => dispatch({type: "add-posts", payload: {posts: response.data}}))
    },[])

    return (
        <div>
            <h2>
                <pre>
                    {JSON.stringify(posts,null,1)}
                </pre>
            </h2>
        </div>
    )
}