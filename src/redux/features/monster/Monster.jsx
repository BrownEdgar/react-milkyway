import React from 'react'
import { useEffect } from 'react';
import { getAsyncMonster, selectMonsters } from './monsterSlice';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';


export default function Monster() {
	
const monster = useSelector(selectMonsters);
const dispatch =useDispatch()
useEffect(() => {
	dispatch(getAsyncMonster("https://jsonplaceholder.typicode.com/todos"))

}, [ ])

	return (
		<div>
		<div  className='monster'>
			{ monster.map(elem=>{
				return( 
					<div key={elem.id}>
						<span 
						className={classNames({completed:elem.completed})}>

						</span>
					 <h3 >{elem.title}</h3>
					 </div>
				// <div>
				// 	<div className='delete'>x</div>
				// <img src={elem.image} alt="" />
				// </div>
				)
			})}
		</div>
		</div>
	)
}
