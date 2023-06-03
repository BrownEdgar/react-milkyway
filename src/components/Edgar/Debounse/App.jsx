import React, { useState } from 'react'
import dataList from './data.json'

import './App.scss'

export default function App() {
	const [data] = useState(dataList);
	const [priceRangeMin, setPriceRangeMin] = useState(0);
	const [priceRangeMax, setPriceRangeMax] = useState(0);
	const [timeOutIdMin, setTimeOutIdMin] = useState(null)
	const [timeOutIdMax, setTimeOutIdMax] = useState(null);


	const setTimer = (timerID, setTimerID, setRange, inputValue) => {
		if (timerID) {
			clearTimeout(timerID)
		}
		const sto = setTimeout(() => {
			setRange(inputValue)
		}, 200)
		setTimerID(sto)
	  }

	const handleChange = (e) => { 
		const { name } = e.target
		if (name === 'minprice') {
			setTimer(timeOutIdMin, setTimeOutIdMin, setPriceRangeMin,e.target.value)
		}else{
			setTimer(timeOutIdMax, setTimeOutIdMax, setPriceRangeMax,e.target.value)
		}
	}

	const filterdata = () => {
		if (priceRangeMin <= 100) return data
		return data.filter(elem => elem.ip_address >= priceRangeMin && elem.ip_address <= priceRangeMax)
	}

	return (
		<div className='container'>
			<div className="filter-section">
				<form>
					<div>
						<label htmlFor="minprice">Select min price...</label>
						<input 
							type="range" 
							id='minprice' 
							name='minprice'
							min={100} 
							max={1e5} 
							step={100} 
							onChange={handleChange}
						/>
						<label htmlFor="maxprice">Select max price...</label>
						<input 
							type="range" 
							id='maxprice' 
							name='maxprice'
							min={priceRangeMin} 
							max={1e5} 
							step={100} 
							onChange={handleChange}
						/>
					</div>
				</form>
				<div>
					<h3>range is <span>{priceRangeMin}/ {priceRangeMax}</span></h3>
				</div>
			</div>
			<div className="product-section">
				{
					filterdata().map(elem => {
						return (
							<article key={elem.id}>
								<h2>{elem.first_name}</h2>
								<p><span>Price:</span> {elem.ip_address}</p>
							</article>
						)
					})
				}
			</div>
		</div>
	)
}
