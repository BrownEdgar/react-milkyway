import React, { useState } from 'react'
import Basket from '../../Basket'
import Card from '../../Card'
import SocialLinks from '../../SocialLinks'

import './Home.scss'

export default function Home({ products, productsOnBasket, addTocard }) {


	return (
		<>
			<div className="wrapper">
				<Basket quantity={productsOnBasket} />
				{
					products.map((card) => {
						return (
							<Card card={card} key={card.id} addTocard={() => addTocard(card.id)} />
						)
					})
				}
			</div>
			<SocialLinks />
		</>
	)
}