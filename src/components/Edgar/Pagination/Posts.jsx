import React from 'react'

export default function Posts({ currentPosts }) {


	return (
		<div className='Posts'>
			<ul className='Posts__list'>
				{currentPosts.map(post => {
					return <li key={post.id}>{post.title}</li>
				})}
			</ul>
		</div>
	)
}
