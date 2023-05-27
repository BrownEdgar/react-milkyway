import React from 'react'

export default function Posts({ posts }) {
	console.log("posts render...")
	return (
		<div>
			{posts.map((elem) => {
				return (
					<p key={elem.id}>
						{elem.title}
					</p>
				)
			})}
		</div>
	)
}
