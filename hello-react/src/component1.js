import React from 'react'
import PropTypes from 'prop-types'
// 组件的函数写法

function Component1(props) {
	return (
		<section>
			<h3 className="header">组件的函数写法</h3>
			<div className="text">{props.text}</div>
		</section>
	)
}

// prop types
Component1.propTypes = {
	text: PropTypes.string.isRequired
}

export default Component1
