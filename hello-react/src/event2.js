import React, { Component } from 'react'

// 传递参数

class Event2 extends Component {
	clickHandle(name) {
		console.log(`Hello ${name}`)
	}

	render() {
		return (
			<div>
				<h3 className="header">传递参数</h3>
				<button onClick={this.clickHandle.bind(this, 'echo')}>click</button>
			</div>
		)
	}
}

export default Event2
