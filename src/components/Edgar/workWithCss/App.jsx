import React from 'react'
import Child from './Child'

import s from  "./App.module.css"

export default function App() {
	return (
		<div className={s.container}>
			<h1 className={s.title}>App Title</h1>
			<hr />
			<Child />
		</div>
	)
}
