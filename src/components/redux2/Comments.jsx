import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector  } from 'react-redux'


export default function Comments() {
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/comments?_limit=2").then(response => dispatch({type: "add-comments", payload: {comments: response.data}}))
    },[])

    return (
        <div>
            <h2>
                <pre>
                    {JSON.stringify(comments,null,1)}
                </pre>
            </h2>
        </div>
    )
}