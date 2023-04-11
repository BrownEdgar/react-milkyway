import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Posts.scss"

export default function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('https://dummyjson.com/posts')
			.then(response => setPosts(response.data.posts))
	}, [])
	
	return (
		<div>
			<h1>Posts page</h1>
				<div className="Post">
				{posts.map(elem => {
					return (
						<Link key={elem.id} className='Post-item'>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</Link>
					)
				})}
				</div>
		</div>
	)
}
