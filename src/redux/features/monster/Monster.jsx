import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncMonster, memoTodos, myAction, selectCompletedTodos, selectMonsters } from './monsterSlice';
import classNames from 'classnames';
import { addCount } from '../count/countSlice';

export default function Monster() {
	const completedTodos = useSelector(memoTodos);
	const count = useSelector(state => state.count);

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAsyncMonster('https://jsonplaceholder.typicode.com/todos'))
	}, [])
	
	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch(myAction("lorem5"))}>add count</button>
			<div className='flex'>
				{
					completedTodos.map(elem => {
						return <div key={elem.id}>
							<span className={classNames(
								{ completed: elem.completed }
							)}></span>
							<h3 key={elem.id}> {elem.id} - {elem.title}</h3>
						</div>
					})
				}
			</div>
		</>

	)
}
