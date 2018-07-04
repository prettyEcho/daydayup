import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        username: props.data.username,
        content: props.data.content
      }
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.release = this.release.bind(this)
  }

  // 发布
  release() {
    this.props.changeInput(this.state.data)
    this.setState((prev, props) => ({
      data: {
        username: prev.data.username,
        content: ''
      }
    }))
  }

  // 改变用户名
  changeUsername(e) {
    const value = e.target.value
    this.setState((prevState, props) => {
      return {
        data: {
          username: value,
          content: prevState.data.content
        }
      }
    })
  }

  // 改变用户评论内容
  changeContent(e) {
    const value = e.target.value
    this.setState((prevState, props) => {
      return {
        data: {
          username: prevState.data.username,
          content: value
        }
      }
    })
  }

  // keyDown
  keyDown(e) {
    e.keyCode === 13 && this.release()
  }

  // 页面加载完自动评论框聚焦
  componentDidMount() {
    this.input.focus() // 输入框聚焦
    window.addEventListener('keydown', this.keyDown.bind(this)) // 监听回车
  }

  render() {
    const username = this.state.data.username
    const content = this.state.data.content
    return (
      <div className="comment-comment-wrap">
        <section className="comment-comment-section">
          <span className="comment-comment-username">用户名:</span>
          <input
            type="text"
            className="comment-comment-userinput"
            value={username}
            onChange={this.changeUsername}
          />
        </section>
        <section className="comment-comment-section">
          <span className="comment-comment-username">评论内容:</span>
          <textarea
            name="comment"
            className="comment-comment-userinput"
            value={content}
            onChange={e => this.changeContent(e)}
            cols="30"
            rows="10"
            ref={input => (this.input = input)}
          />
        </section>
        <section className="comment-comment-section">
          <button className="comment-comment-release" onClick={this.release}>
            发布
          </button>
        </section>
      </div>
    )
  }
}

Comment.propTypes = {
  data: PropTypes.object
}

export default Comment
