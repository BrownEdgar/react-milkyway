import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function App() {
const [data, setData] = useState([])

	useEffect(() => {
		async function getData() {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
				params: {
					_limit: 2,
					_start: 5
				}
			});
			setData(response.data)
		
		}
		getData()
	})
	return (
		<div>
			<pre>
				{JSON.stringify(data, null, 1)}
			</pre>
		</div>
	)
}
