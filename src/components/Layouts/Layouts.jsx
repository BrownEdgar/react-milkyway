import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
	return (
		<>
			<Navbar />
			<Outlet /> 
			<footer>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia minima laudantium?</p>
			</footer>
		</>
	)
}
