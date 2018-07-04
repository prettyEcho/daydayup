import React, { Component } from 'react'

// 绑定this

class Event3 extends Component {
  clickHandle() {
    console.log(this)
  }

  clickHandle1 = () => {
    console.log(this)
  }

  render() {
    return (
      <div>
        <h3 className="header">绑定this</h3>
        <button onClick={this.clickHandle.bind(this)}>click</button>
        <button onClick={this.clickHandle1}>click</button>
        <button onClick={e => this.clickHandle1()}>click</button>
      </div>
    )
  }
}

export default Event3
