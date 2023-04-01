import React from 'react'

export default function Child(props) {
	console.log(props)
	return (
		<div>
			<h1>Lorem ipsum dolor sit.</h1>
			{props.children}
			
		</div>
	)
}
