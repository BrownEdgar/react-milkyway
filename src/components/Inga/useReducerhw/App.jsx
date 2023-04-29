import React, { useReducer } from 'react'
import { reducer,initialState } from "./reducer"
import axios from "axios" 


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleClick = () => {
        dispatch({type:"posts"})
    }
    const handleClick1 = () => {
      dispatch({type:"sort"})
  }
  const handleClick2 = () => {
    dispatch({type:"add"})
}

const addPost = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: 10
    }
  }).then(response => dispatch({
    type:GET_POST , playload
  }))
}



  return (
    <div>
        <h1>State: {JSON.stringify (state,null,1)}</h1>
        <button onClick={handleClick}>Posts</button>
        <button onClick={handleClick1}>Sort</button>
        {/* <form ><input type="text" /></form> */}
        <button onClick={handleClick2}>Add Name</button>
    </div>
  )
}