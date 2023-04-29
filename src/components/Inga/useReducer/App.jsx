import React, { useReducer } from 'react'
import { reducer } from "./reducer"

export default function App() {
    const [state, dispatch] = useReducer(reducer, 0)
    const handleClick = () => {
        dispatch({type:"add-count"})
    }
    const handleClick2 = () => {
        dispatch({type:"minus-count"})
    }
  return (
    <div>
        <h1>State: {state}</h1>
        <button onClick={handleClick}>add count</button>
        <button onClick={handleClick2}>minus count</button>
    </div>
  )
}
