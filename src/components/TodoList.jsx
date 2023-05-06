import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO } from '../redux/features/actionTypes';

export default function TodoList() {
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		
		e.preventDefault();
		const value = e.target[0].value;
		dispatch({ type: ADD_TODO, payload: { value }});
		e.target[0].value = '';
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='add todo' required />
				<input type="submit" value="add" />
			</form>
			{todos.map((elem, index) => {
				return (
					<p key={index}>
						{elem}
					</p>
				)
			})}
		</div>
	)
}
