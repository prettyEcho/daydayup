import React, { Component } from 'react'

// state
class State1 extends Component {
	constructor(props) {
		super(props)
		this.state = { name: 'echo' }
	}
	render() {
		return (
			<div>
				<h3 className="header">state</h3>
				<div className="text">{this.state.name}</div>
			</div>
		)
	}
}

export default State1
