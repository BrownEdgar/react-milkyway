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
			<div className="Posts">
				{posts.map(elem => {
					return (
						<Link
							key={elem.id}
							className='Posts-item'
							to={`/posts/${elem.id}`}
						>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
