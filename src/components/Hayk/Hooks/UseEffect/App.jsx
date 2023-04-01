import React, { useEffect, useState } from 'react'
const SEC_URL = process.env.REACT_APP_MAIN_URL

export default function App() {
    const [data, setData] = useState([])

	useEffect(() => {
		fetch(SEC_URL)
		.then(response => response.json())
		.then(data => setData(data))
	}, [])

	console.log(data);

	return (
		<div className='container'>
			<div className='Product'>
				{data?.products?.map(elem => {
					return (
						<>
							<h1>
								<span>Title: </span>{elem?.title}
							</h1>

							<h3>
								<span>Description: </span>{elem?.description}
							</h3>

							<h3>
								<span>Price: </span>{elem?.price}
							</h3>

							<h3>
								<span>DiscountPercentage: </span>{elem?.discountPercentage}
							</h3>

							<h3>
								<span>Rating: </span>{elem?.rating}
							</h3>

							<h3>
								<span>Stock: </span>{elem?.stock}
							</h3>

							<h1>
								<span>Brand: </span>{elem?.brand}
							</h1>
							<h3>
								<span>Category: </span>{elem?.category}
							</h3>

							<img src={elem?.images[0]} alt={elem.title}/>
						</>
					)
				})}
			</div>
		</div>
	)
}
