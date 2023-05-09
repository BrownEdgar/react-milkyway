import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Count from './redux/features/count/Count'
import Monster from './redux/features/monster/Monster'

import "./App.css"
import { descSorted, todoReset } from './redux/features/monster/monsterSlice'

export default function App() {
	const dispatch = useDispatch()
	const getComleted = () => { 
		dispatch(descSorted(true))
	 }
	const getUnComleted = () => {
		dispatch(descSorted(false))
	}
	return (
		<div>
				{/* <Count /> */}
				<div className="buttons">
					<button onClick={getComleted}>complited first</button>
				<button onClick={getUnComleted}>uncomplited first</button>
					<button>complited first</button>
					<button onClick={() => dispatch(todoReset())}>reset</button>
				</div>
				<Monster />
		</div>
	)
}
