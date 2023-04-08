import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function App() {


	useEffect(() => {
		async function getData() {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			console.log(response.data)
		}
		getData()
	})
	return (
		<div>
			
		</div>
	)
}
