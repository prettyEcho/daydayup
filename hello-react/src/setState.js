import React, { Component } from 'react'

class SetState2 extends Component {
	constructor(props) {
		super(props)

		this.state = { name: 'echo', count: 0 }
	}

	// 对象形式
	changeName() {
		this.setState({
			count: this.state.count + 1
		})

		this.setState({
			count: this.state.count + 2
		})

		console.log(this.state.count)
	}

	// 函数形式(当涉及到props或者后一个状态依赖前一个状态时使用)
	changeNameFn() {
		this.setState(prevState => ({ count: prevState.count + 1 }))
		this.setState(prevState => ({ count: prevState.count + 1 }))
		console.log(this.state.count)
	}
	render() {
		return (
			<div>
				<h3 className="header">setState</h3>
				<button onClick={this.changeName.bind(this)}>对象形式</button>
				<button onClick={this.changeNameFn.bind(this)}>函数形式</button>
			</div>
		)
	}
}

export default SetState2
