import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Blog() {
	const data = useOutletContext();
	console.log(data)
	return (
		<div>
			<h1>Blog page</h1>
		</div>
	)
}
