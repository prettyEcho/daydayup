import React, { Component } from 'react'

// 普通循环

const arr = [1, 2, 3]
const list = arr.map((item, index) => <li key={index}>{item}</li>)

class List1 extends Component {
	render() {
		return (
			<div>
				<h3 className="header">普通列表循环</h3>
				<ul>{list}</ul>
			</div>
		)
	}
}

export default List1
