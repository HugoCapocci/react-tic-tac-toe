import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = 'X';
    this.setState({ cells: cells });
  }

  renderCell(i, x) {
    return (
      <Cell
        value={this.state.cells[i]} 
        index={x}
        onClick={() => this.handleClick(x)} />
    );
  }

  render() {
    return (
      <div className="App">
        <h3>Next Player : X</h3>
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