import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncMonster } from './monsterSlice';

export default function Monster() {
	const monster = useSelector(state => state.monster);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAsyncMonster('https://dummyjson.com/users'))
	}, [])
	
	return (
		<div>
			<pre>
				{JSON.stringify(monster,null,1)}
			</pre>
		</div>
	)
}
