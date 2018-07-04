import React, { Component } from 'react'
import './App.css'
import Search from './Search'
import ShowList from './ShowList'

class App extends Component {
  state = {
    showList: []
  }

  constructor(props) {
    super(props)

    this.changeShowList = this.changeShowList.bind(this)
  }

  changeShowList(list) {
    this.setState({
      showList: list
    })
  }

  render() {
    return (
      <div className="app">
        <Search
          showList={this.state.showList}
          changeShowList={this.changeShowList}
        />
        <ShowList showList={this.state.showList} />
      </div>
    )
  }
}

export default App
