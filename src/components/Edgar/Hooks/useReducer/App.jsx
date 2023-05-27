import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer'
import { GET_POSTS, MINUS_COUNT, PLUS_COUNT, RANDOM_ARR } from './actionTypes'
import axios from 'axios'

import './App.css'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addPost = () => { 
		axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: 10
			}
		}).then(response => dispatch({ 
				type: GET_POSTS, payload: {
				posts: response.data
			}}))
			
	}
	return (
		<div>
			<pre>State: {JSON.stringify(state,null,1)}</pre>
			<button onClick={addPost}>add posts</button>
	
		</div>
	)
}
