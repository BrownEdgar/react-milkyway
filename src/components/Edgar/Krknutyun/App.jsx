import React, { useState } from 'react';
import classNames from 'classnames';
import data from './db.json'

import './App.css'

export default function App() {
	const [isActiveIndex, setIsActiveIndex] = useState(null);
	const [users, setUsers] = useState(data)
	const [gender, setGender] = useState('')

	const handleClick = (index) => {
		setIsActiveIndex(index)
	}
	const handleChange = (e) => { 
		const {value} = e.target;
		setGender(value)
	 }


	return (
		<div className='wrap'>
			{
				Array(5).fill().map((_, index) => {
					return <button
						key={index}
						className={classNames('button-17', {
							active: isActiveIndex === index
						})}
						onClick={() => handleClick(index)}
					>
						button {index + 1}
					</button>
				})
			}

			<form>
				<div>
					<input type="radio" name='gender' value='male' id='male' 
					onChange={handleChange}/>
					<label htmlFor="male">Male</label>
				</div>
				<div>
					<input type="radio" name='gender' value='female' id='female' 
					onChange={handleChange}/>
					<label htmlFor="female">Female</label>
				</div>
			</form>



			<div className="students">
				<table>
					<tr>
						<th>id</th>
						<th>username</th>
						<th>email</th>
						<th>gender</th>
					</tr>
					<tbody>
						{
							users.map(elem => {
								return (
									<tr key={elem.id}>
										<td>{elem.id}</td>
										<td>{elem.username}</td>
										<td>{elem.email}</td>
										<td>{elem.gender}</td>
									</tr>
								)
							})
						}
					</tbody> 
				</table>
			</div>
		</div>
	)
}
