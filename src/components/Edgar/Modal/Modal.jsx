import React from 'react'

import "./Modal.scss"

export default function Modal(props) {
	return (
		<div className='Modal'>
			<div className="Modal-Content">
				{props.children}
			</div>
		</div>
	)
}
