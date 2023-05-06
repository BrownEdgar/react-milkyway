import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ADD_POSTS } from '../redux/features/actionTypes';

export default function Posts() {
	const posts = useSelector(state => state.posts)
	const dispatch = useDispatch();
	useEffect(() => {

		axios('https://jsonplaceholder.typicode.com/posts')
			.then(response => dispatch({
				type: ADD_POSTS,
				payload: {
					posts: response.data
				}
			}))
	}, [])

	return (
		<div>
			<h2>
				<pre>
					{JSON.stringify(posts,null,1)}
				</pre>
			</h2>
		</div>
	)
}
