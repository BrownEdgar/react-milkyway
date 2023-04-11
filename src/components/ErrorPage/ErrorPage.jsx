import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<div className='errorPage'>
			<Link to="/" className='btn-link'>go home</Link>
			<img src="./images/404.jpg" alt="not found"  className='error-image'/>
		</div>
	)
}
