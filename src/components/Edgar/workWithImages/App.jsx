import React, { useState } from 'react'

import baobab from "./baobab.jpg"

export default function App() {
	const [url, setUrl] = useState('https://plus.unsplash.com/premium_photo-1670226145708-fe8e83e8d9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80')
	return (
		<div>
			<img src="https://plus.unsplash.com/premium_photo-1670226145708-fe8e83e8d9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="africa" />
			<img src={url} alt="" />
			<img src={baobab} alt="" />
			<img src="./images/baobab.jpg" alt="" />
		</div>
	)
}
