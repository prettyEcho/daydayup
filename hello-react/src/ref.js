import React, { Component } from 'react'

class Ref extends Component {
	componentDidMount() {
		this.input.focus()
	}

	render() {
		return (
			<div>
				<h3 className="header">ref</h3>
				<input type="text" ref={input => (this.input = input)} />
			</div>
		)
	}
}

export default Ref
