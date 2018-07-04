import React, { Component } from 'react'
import data from './mock.js'
import _ from 'lodash'

class Search extends Component {
  state = {
    value: '',
    stock: false,
    showList: []
  }
  constructor(props) {
    super(props)

    this.changeValue = this.changeValue.bind(this)
    this.changeStock = this.changeStock.bind(this)
  }

  changeValue(e) {
    this.setState({
      value: e.target.value
    })
    _.debounce(this.updateListByValue, 500)(e.target.value, this)
  }

  updateListByValue(value, that) {
    let result = data.filter(item => {
      let re = new RegExp(value, 'ig')
      return re.test(item.name)
    })
    that.setState({
      showList: result
    })
    that.props.changeShowList(result)
  }

  changeStock(e) {
    this.setState({
      stock: e.target.checked
    })
    this.updateListByStock(e.target.checked)
  }

  updateListByStock(value) {
    let result = value
      ? this.state.showList.filter(item => item.stocked === value)
      : this.state.showList
    this.props.changeShowList(result)
  }

  render() {
    return (
      <div className="goods">
        <section className="goods-search">
          <input
            className="goods-search-input"
            type="text"
            value={this.state.value}
            onChange={this.changeValue}
          />
        </section>
        <section className="goods-search">
          <input
            type="checkbox"
            checked={this.state.Stock}
            onChange={this.changeStock}
          />{' '}
          Only show products in stock
        </section>
      </div>
    )
  }
}

export default Search
