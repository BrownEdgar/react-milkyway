import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Posts from './Posts';

import "./App.scss"
import Pagination from './Pagination';

export default function App() {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => setPosts(response.data))
	}, [])
	
	const up = page * perPage; // 30
	const down = up - perPage; // 20
	const currentPosts = posts.slice(down,up);


	const changePage = (pagecount) => { 
		setPage(pagecount)
	}

	return (
		<div className='App'>
			<Posts currentPosts={currentPosts}/>
			<Pagination totalPosts={posts.length} perPage={perPage} changePage={changePage}/>
		</div>
	)
}
