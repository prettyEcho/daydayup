import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Alert = props => (
	<div
		style={{
			margin: '0 auto',
			width: 200,
			height: 100,
			border: '1px solid #ccc'
		}}
	>
		{props.children[0]}
		{props.children[1]}
	</div>
)

Alert.propTypes = {
	children: PropTypes.array
}

class Children extends Component {
	render() {
		return (
			<div>
				<h3 className="header">children</h3>
				<Alert>
					<p>Hello alert</p>
					<p>i am echo</p>
				</Alert>
			</div>
		)
	}
}

export default Children
