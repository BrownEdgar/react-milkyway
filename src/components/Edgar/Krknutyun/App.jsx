import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DinamicContent from './DinamicContent';

import './App.css'


export default function App() {
	const [isActive, setIsActive] = useState(false)
	const [data, setData] = useState([{
		id: 1,
		question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur fuga, hic perspiciatis similique vitae soluta quasi, inventore nostrum non cupiditate doloremque necessitatibus fugit. Consequatur, eos sed voluptas ratione fugit inventore repellendus mollitia non totam officiis. Eaque quasi minima natus!',
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, architecto.",
		isShow: false
	}])
	const handleClick = () => { 
		setIsActive(!isActive)
	 }

	return (
		<div className='wrap'>
			<div className={`box ${isActive ? 'active' : ""}`}>
				<div className='question'>
					<p>
						{data[0].question}
					</p>
					<button onClick={handleClick}>show answer</button>
				</div>
				<div className='answer'>
					<p>
						{data[0].answer}
					</p>
					<button onClick={handleClick}>hide</button>
				</div>
			</div>
		</div>
	)
}


//useEffect
//useTRansition
//props.children
// what is ....
//useReducer
// ? :
// ui button

