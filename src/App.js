import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Count from './redux/features/count/Count'
import Monster from './redux/features/monster/Monster'


export default function App() {

	return (
		<div>
				{/* <Count /> */}
				<Monster />
		</div>
	)
}
