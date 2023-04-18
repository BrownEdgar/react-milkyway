import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

import "./Posts.scss"

function Posts() {
	const posts = useLoaderData()
	return (
		<div>
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


async function postLoader({ request, params }) {
	console.log({ request, params })
	const response = await axios.get('http://localhost:4000/posts');
	console.log(response.data)
	return response.data;
}

export { Posts, postLoader }