import React from 'react'
import PropTypes from 'prop-types'

import './DinamicContent.css'

export default function DinamicContent(props) {
	return (
		<div className={`box ${props.variant}`}>
			{props.children}
		</div>
	)
}

DinamicContent.defaultProps = {
	variant: 'light'
}

PropTypes.propTypes = {
	variant: PropTypes.oneOf(['dark', 'light', 'purple'])
}
