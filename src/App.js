import React from "react";
import web3 from './web3'
import lottery from './lottery'
import {Component} from 'react'

class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "",
  }

 async componentDidMount() {
    // WE DON'T HAVE TO SET (FROM) IN CALL, BECAUSE THIS WEB3 HAS AN ACCOUNT SET BY DEFAULT
    const manager = await lottery.methods.manager().call()
    const players = await lottery.methods.entries().call()
    const balance = await web3.eth.getBalance(lottery.options.address)
    this.setState({manager, players, balance})
  }

   onSubmit = async (e) => {
    e.preventDefault()

    const accounts = await web3.eth.getAccounts()

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether"),
    });

    this.setState({ message: "You have been entered!" });
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts()

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    this.setState({ message: "Winner has been picked.!!!" });

  }

  render() {

    return (
      <div className="App">
        <h2>Lottery</h2>
        <p>This contract is managed by {this.state.manager}.
          There are currently <strong>{this.state.players.length}</strong> competing to win 
          <strong>{web3.utils.fromWei(this.state.balance, 'ether')}</strong>
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Ready to pick a winner?!</h4>
        <button onClick={this.onClick}>Pick a winner</button>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    )
  }
  
}

export default App;
