import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector  } from 'react-redux'


export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/todos?_limit=2").then(response => dispatch({type: "add-todos", payload: {todos: response.data}}))
    },[])

    return (
        <div>
            <h2>
                <pre>
                    {JSON.stringify(todos,null,1)}
                </pre>
            </h2>
        </div>
        
    )
}