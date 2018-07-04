import React, { Component } from 'react'

class ShowList extends Component {
  render() {
    return (
      <table className="goods-showList">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {this.props.showList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default ShowList
