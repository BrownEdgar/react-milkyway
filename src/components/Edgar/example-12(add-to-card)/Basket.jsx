import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Basket({ quantity }) {

	const navigate = useNavigate()
	const gotoOrder = () => { 
		navigate('/order')
	 }
  return (
    <div className="cart-nav" onClick={gotoOrder}>
      <div className="icon">
        <i className="fas fa-shopping-cart"></i>
        <span>Корзина</span>
      </div>
      <div className="item-count">{quantity}</div>
    </div>
  )
}
