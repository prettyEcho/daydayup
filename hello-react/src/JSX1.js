import React, { Component } from 'react'

// JSX 变量

const name = 'echo'

class JSX1 extends Component {
	render() {
		return (
			<section>
				<h3 className="header">JSX变量</h3>
				<div className="text">Hello, {name}</div>
			</section>
		)
	}
}

export default JSX1
