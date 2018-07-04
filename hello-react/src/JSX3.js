import React, { Component } from 'react'

// JSX 函数执行

function fn() {
	return 'Hello, echo'
}

class JSX3 extends Component {
	render() {
		return (
			<div>
				<h3 className="header">JSX函数执行</h3>
				<div className="text">{fn()}</div>
			</div>
		)
	}
}

export default JSX3
