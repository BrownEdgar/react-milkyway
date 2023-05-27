import React from 'react'
import CustomHook from './CustomHook'
import CustomFetchApi from './CustomFetchApi'

export default function App() {
	const [arr, setArr, { sorted, add, findNumbersCount }] = CustomHook([12,45,78,96,32,10,19])
		const handleClick = () => { 
			setArr([1,2,3,4,5,6])
		 }


	const { data } = CustomFetchApi("https://jsonplaceholder.typicode.com/users", {
		limit:9
	})

	return (
		<div>
			<h1>{JSON.stringify(data)}</h1>
			<button onClick={sorted}>sorted</button>
			<button onClick={() => add(149)}>add element</button>
			<button onClick={handleClick}>get count</button>
		</div>
	)
}
