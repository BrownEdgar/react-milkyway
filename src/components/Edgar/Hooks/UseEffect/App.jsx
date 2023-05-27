import React, { useState, useEffect } from 'react';
import MyLoader from './MyLoader';

import "./App.scss";

const MAIN_URL = process.env.REACT_APP_MAIN_URL;
export default function App() {
	const [data, setData] = useState([])
	const [isLoading, setIsLoaging] = useState(false)

	useEffect(() => {
		setIsLoaging(true)
		fetch(MAIN_URL)
			.then(response => response.json())
			.then(data => {
				setData(data.users);
				setIsLoaging(false)
			})
	}, [])


	const handleDelete = (id) => {
		const filteredData = data.filter(user => user.id !== id);
		setData(filteredData)
	}

	useEffect(() => {
		console.log("Loading... fetch")
	}, [isLoading])


	return (
		<div className='container'>
			<div className="Posts">
				{
					isLoading
						? <MyLoader />
						: (
							<>
								{
									data.map(user => {
										return (
											<div className='Posts__Item' key={user.id}>
												<span className='btn_delete' onClick={() => handleDelete(user.id)}>+</span>
												<img src={user.image} alt={user.firstName} className="Posts__Image" />
												<h2 className='Posts__Name'>
													<span>FirstName: {user.firstName}</span>
													<span>LastName: {user.lastName}</span>
												</h2>
												<hr />
												<p>height: {user.height}</p>
												<p>weight: {user.weight}</p>
											</div>
										)
									})
								}
							</>
						)

				}
			</div>
		</div>
	)
}
