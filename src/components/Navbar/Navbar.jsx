import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.scss"

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/" >Home</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
