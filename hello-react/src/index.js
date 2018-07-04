import React, { Component } from 'react'
import ReactDom from 'react-dom'

import './index.css'
import Component1 from './component1'
import Component2 from './component2'
import JSX1 from './JSX1'
import JSX2 from './JSX2'
import JSX3 from './JSX3'
import State1 from './state1'
import SetState from './setState'
import Event1 from './event1'
import Event2 from './event2'
import Event3 from './event3'
import List1 from './list1'
import Lifecycle from './lifecycle'
import Ref from './ref'
import Children from './Children'

class Index extends Component {
	render() {
		return (
			<div>
				<Component1 text="我是组件的函数式写法" />
				<Component2 text="我是组件的类写法" />
				<JSX1 />
				<JSX2 />
				<JSX3 />
				<State1 />
				<SetState />
				<Event1 />
				<Event2 />
				<Event3 />
				<List1 />
				<Lifecycle />
				<Ref />
				<Children />
			</div>
		)
	}
}

ReactDom.render(<Index />, document.querySelector('#root'))
