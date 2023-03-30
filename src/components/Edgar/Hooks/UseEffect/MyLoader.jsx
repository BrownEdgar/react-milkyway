import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={800}
		height={460}
		viewBox="0 0 800 460"
		backgroundColor="#bbc3be"
		foregroundColor="#60b6e1"
		{...props}
	>
		<rect x="8" y="28" rx="0" ry="0" width="213" height="194" />
		<rect x="244" y="29" rx="0" ry="0" width="213" height="194" />
		<rect x="8" y="242" rx="0" ry="0" width="213" height="194" />
		<rect x="244" y="242" rx="0" ry="0" width="213" height="194" />
		<rect x="474" y="242" rx="0" ry="0" width="213" height="194" />
		<rect x="476" y="30" rx="0" ry="0" width="213" height="194" />
	</ContentLoader>
)

export default MyLoader