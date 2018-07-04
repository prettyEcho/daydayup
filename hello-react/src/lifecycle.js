import React, { Component } from 'react'

function Header() {
	return <header>header</header>
}

class Lifecycle extends Component {
	constructor(props) {
		super(props)
		console.log('constructor')
		this.state = {
			hide: false
		}
		this.changeHide = this.changeHide.bind(this)
	}

	// 在组件挂载之前加载数据
	UNSAFE_componentWillMount() {
		console.log('before mount')
	}

	// 组件挂载后，进行相应操作
	componentDidMount() {
		console.log('after mount')
	}

	// 组件卸载之前
	componentWillUnmount() {
		console.log('component destory')
	}

	changeHide() {
		this.setState(prev => ({
			hide: !prev.hide
		}))
	}

	render() {
		console.log('render')
		return (
			<div>
				{this.state.hide ? null : <Header />}
				<button onClick={this.changeHide}>destory</button>
			</div>
		)
	}
}

export default Lifecycle
