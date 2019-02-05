import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Cell from './Cell';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">

          </div>
        </div>
      );
    }
  }

export default App;
