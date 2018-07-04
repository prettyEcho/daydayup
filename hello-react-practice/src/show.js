import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Show extends Component {
  static propTypes = {
    dataList: PropTypes.array.isRequired
  }

  delete(index) {
    this.props.deleteComment(index)
  }

  render() {
    const dataList = this.props.dataList
    return (
      <div>
        <ul>
          {dataList.map((item, index) => (
            <li className="comment-show-item" key={index}>
              <span className="comment-show-title">{item.username}:</span>
              <span>{item.content}</span>
              {/* 删除 */}
              <span
                className="comment-show-delete"
                onClick={this.delete.bind(this, index)}
              >
                删除
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Show
