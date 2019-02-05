import React, { Component } from 'react';
import Game from './Game';

import './App.css';

class App extends Component {
  render() {
    
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="App">
        <header className="App-header">
          
        <Game/>
          
        </header>
      </div>
    );
  }
}

export default App;
