import React from 'react'
import Child from './Child'

export default function App() {
	return (
		<div>
			<Child name={"React.js"}>
				<h1>I am props children number one</h1>
				<h1>I am props children number one</h1>
			</Child>
			<Child>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptas fuga ex nam neque accusantium.</p>
				<button>click</button>
			</Child>
		</div>
	)
}
