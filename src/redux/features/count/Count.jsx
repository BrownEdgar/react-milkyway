import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from './countSlice';

export default function Count() {
	const count = useSelector(state => state.count);
	const dispatch =useDispatch()
	const handleClick = () => { 
		dispatch(addCount(8))
	}
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleClick}>add count</button>
		</div>
	)
}
