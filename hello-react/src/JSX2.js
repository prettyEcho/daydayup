import React, { Component } from 'react'

// JSX 条件返回

class JSX2 extends Component {
	render() {
		const male = true

		return (
			<div>
				<h3 className="header">JSX条件返回</h3>
				<div className="text">Hello, {male ? 'echo' : 'cherry'}</div>
			</div>
		)
	}
}

export default JSX2
