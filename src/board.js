import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      player: 'X',
    }
    this.endGame = false;
  }



  isBoardFull() {
    this.state.cells.forEach(cell => {
      if (cell === null){
        return false;
      }      
    });
    return true;
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    if(this.calculateWinner(cells) || this.endGame) {
      return;
    }
    if (cells[i] === null) {
      cells[i] = this.state.player;
      this.setState({ cells: cells });
      if (this.state.player == 'X') {
        this.setState({ player: "O" })
      } else {
        this.setState({ player: "X" })
      }
    } else {
      alert('Case déjà cochée');
    }
  }

  calculateWinner(cells) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  isEnd() {
    let full = true;
    this.state.cells.forEach(cell => {
      if (cell != null) {
        return false;
      }
    })
    return full;
  }

  renderCell(i, x) {
    return (
      <Cell
        style={this.state.style}
        value={this.state.cells[i]}
        index={x}
        onClick={() => this.handleClick(x)} />
    );
  }

  render() {
    let status = 'Next Player : '+ this.state.player;
    const winner = this.calculateWinner(this.state.cells);
    if (winner) {
      status = 'Winner : ' + this.state.player;
    } else if (this.endGame) {
      status = 'Game Over';
    }

    return (
      <div className="App">
        <h3>{status}</h3>
        <div>
          {this.renderCell(0, 0)}
          {this.renderCell(1, 1)}
          {this.renderCell(2, 2)}
        </div>
        <div>
          {this.renderCell(3, 3)}
          {this.renderCell(4, 4)}
          {this.renderCell(5, 5)}
        </div>
        <div>
          {this.renderCell(6, 6)}
          {this.renderCell(7, 7)}
          {this.renderCell(8, 8)}
        </div>
      </div>
    );
  }
}
export default Board;