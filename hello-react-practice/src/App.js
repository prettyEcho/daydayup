import React, { Component } from 'react'
import ReactDom from 'react-dom'

import './index.css'
import Comment from './comment'

class Index extends Component {
  render() {
    return <div className="wrap" />
  }
}

ReactDom.render(<Index />, document.querySelector('#root'))
