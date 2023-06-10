import React from 'react'
import { Link } from 'react-router-dom'
import './Order.scss'

export default function Order({ products }) {

	const getTotal = () => {
		const total = products.reduce((acc, currentValue) => {
			if (Object.hasOwn(currentValue, 'count')) {
				return acc += currentValue.count * parseInt(currentValue.price);
			}
			return acc;
		}, 0)
		return total;
	}

	return (
		<div className='Order'>
			<Link to={'/'}>go back</Link>
			<table>
				<tbody>
					{
						products
						.filter(elem => Object.hasOwn(elem, 'count'))
						.map(product => {
							return (
								<tr key={product.id}>
									<td id="image-data">
										<img src={product.image} alt={product.title} />
									</td>
									<td id="info-data">
										<h2>{product.title}</h2>
										<strong>{product.count} x {product.price}</strong>
									</td>

									<td id="price-data">
										<p>
											<b>{product.count * parseInt(product.price)}</b>
										</p>
									</td>
								</tr>
							)
						})
					}
				</tbody>
		
					<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td>Total: <strong>${getTotal()}</strong></td>
					</tr>
					</tfoot>
			</table>
		</div>
	)
}
