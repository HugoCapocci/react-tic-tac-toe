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
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
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
    return (
      <div className="App">
        <h3>Next Player : {this.state.player}</h3>
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