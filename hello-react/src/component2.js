import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 组件的类写法

class Component2 extends Component {
	render() {
		return (
			<section>
				<h3 className="header">组件的类写法</h3>
				<div className="text">{this.props.text}</div>
			</section>
		)
	}
}

// prop types
Component2.propTypes = {
	text: PropTypes.string.isRequired
}

export default Component2
