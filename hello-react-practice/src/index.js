import React, { Component } from 'react'
import ReactDom from 'react-dom'

import './index.css'
import Comment from './comment'
import Show from './show'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      data: {
        username: '',
        contnet: ''
      }
    }
    this.changeInput = this.changeInput.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  // 改变父组件状态、并做localstorage存储
  changeInput(data) {
    this.setState({
      data: {
        username: data.username,
        content: ''
      }
    })
    this.setState((prevState, props) => {
      prevState.dataList.push(data) // 插入新的评论到评论数组钟
      this.setLocalStorage('username', data.username) // 存储username到localstorage
      this.setLocalStorage('dataList', JSON.stringify(prevState.dataList)) // 存储dataList到localstorage
      return {
        dataList: prevState.dataList
      }
    })
  }

  // 删除评论
  deleteComment(index) {
    this.setState(prev => {
      prev.dataList.splice(index, 1) // 删除指定序列评论
      this.setLocalStorage('dataList', JSON.stringify(prev.dataList)) // 存储dataList到localstorage

      return {
        dataList: prev.dataList
      }
    })
  }

  // localstorage存储和修改
  setLocalStorage(key, value) {
    if (window.localStorage) {
      const storage = window.localStorage
      if (storage[key] !== value) {
        // storage[key] = value
        storage.setItem(key, value)
      }
    } else {
      alert('您的浏览器不支持localstorage')
    }
  }

  // localStorage数据获取
  getLocalStorage(key) {
    return window.localStorage[key] ? window.localStorage.getItem(key) : ''
  }

  // 页面挂载之前读取localstorage内容
  UNSAFE_componentWillMount() {
    const username = this.getLocalStorage('username') || '' // 从localstorage获取username
    const listStr = this.getLocalStorage('dataList') // 从localstorage获取dataList
    const listArr = listStr ? JSON.parse(listStr) : []

    this.setState({
      dataList: listArr,
      data: {
        username,
        content: ''
      }
    })
  }

  render() {
    return (
      <div className="comment">
        <Comment data={this.state.data} changeInput={this.changeInput} />
        <Show
          dataList={this.state.dataList}
          deleteComment={this.deleteComment}
        />
      </div>
    )
  }
}

ReactDom.render(<Index />, document.querySelector('#root'))
