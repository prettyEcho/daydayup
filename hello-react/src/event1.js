import React, { Component } from 'react'

// 普通事件

class Event1 extends Component {
	constructor(props) {
		super(props)
		this.state = { isToggleOn: true }

		this.clickHandle = this.clickHandle.bind(this)
	}

	clickHandle() {
		this.setState({
			isToggleOn: !this.state.isToggleOn
		})
	}

	render() {
		return (
			<div>
				<h3 className="header">普通事件</h3>
				<button onClick={this.clickHandle}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		)
	}
}

export default Event1
