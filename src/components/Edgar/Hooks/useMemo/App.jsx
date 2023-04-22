import axios from 'axios';
import React, { useState, useMemo, useEffect } from 'react'
import Posts from './Posts';

export default function App() {
	const [numbersList, setNumbersList] = useState([54,14,87,25,20,19,6]);
	const [posts, setPosts] = useState([])
	const [bool, setBool] = useState(false)

	useEffect(() => {
		axios({
			method:'get',
			url: "https://jsonplaceholder.typicode.com/posts"
		}).then(response => setPosts(response.data))
	}, [])
	


	function sortedData() {
		console.log("sorted data...")
		return numbersList.sort((a, b) => a - b)
	}
	const memoized = useMemo(sortedData, [numbersList])
	const postsMemo = useMemo(() => <Posts posts={posts} />, [posts])

	return (
		<div>
			{
				memoized.map((elem,index) => <p key={index}>{elem}</p>)
			}
			<button onClick={() => setNumbersList([...numbersList, 65])}>toggle</button>
			{postsMemo}
		</div>
	)
}




