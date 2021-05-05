import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushisArray: [],
    eatenSushisArray: [],
    balance: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(originalSushisArray => {
        this.setState(
          {sushisArray: originalSushisArray.map(originalSushiObject => ({...originalSushiObject, wasEaten: false}))}
        )
      })
  }

  eatSushi = (sushiPrice) => {
    console.log('a sushi has been eaten')
    this.setState({
      balance: this.state.balance-sushiPrice,
      eatenSushiArray: this.state.eatenSushisArray.push('')
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} balance={this.state.balance} sushisArray={this.state.sushisArray}/>
        <Table balance={this.state.balance} eatenSushiArray={this.state.eatenSushisArray} />
      </div>
    );
  }
}

export default App;