import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Noel from './Noel';

class App extends Component {

  state = {
    message : 'Tchoin',
    time: 1500
  }

  onChangeMessage = (event) => {
    const value = event.target.value;
    this.setState({
      message: value
    })
  }

  onChangeTime = (event) => {
    const time = parseInt(event.target.value);
    this.setState({
      time: time
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board />
          <label htmlFor="blink-time">Temps: </label>
          <input id="blink-time" type="number" value={this.state.time} onChange={this.onChangeTime}/>
          <label htmlFor="blink-text">Message: </label>
          <input id="blink-text" type="text" value={this.state.message} onChange={this.onChangeMessage}/>
          <Noel time = {this.state.time} message = {this.state.message}/>
        </header>
      </div>
    );
  }
}

export default App;
