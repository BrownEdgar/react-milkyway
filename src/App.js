import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Posts from './components/Posts'
import { ADD_COUNT, CLEAR_OBJECT } from './redux/features/actionTypes';
import TodoList from './components/TodoList';

export default function App() {

	const { developer, count } = useSelector(state => state);
	console.log(developer)
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch({ type: ADD_COUNT })
	}

	const handleClick2 = () => {
		dispatch({ type: CLEAR_OBJECT })
	}

	return (
		<div>
			{/* <h1>Redux: {count}</h1>
			<h1>developer: {JSON.stringify(developer)}</h1>
			<button onClick={handleClick}> add count</button>
			<button onClick={handleClick2}>delete function</button> */}
			<TodoList />	
			{/* <Posts /> */}
		</div>
	)
}
