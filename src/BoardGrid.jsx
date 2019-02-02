import React, { Component } from 'react';
import Cell from './Cell';

import './BoardGrid.css';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';


export default class BoardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
      currentPlayer: PLAYER_1
    };
    this.state.status = this.getStatus();
  }

  getNextPlayer() {
    if (this.state.currentPlayer === PLAYER_1) return PLAYER_2;
    return PLAYER_1;
  }

  handleClick(index) {
    const grid = [...this.state.grid];
    if(grid[index] || this.getWinner()) return;
    grid[index] = this.state.currentPlayer;
    this.setState(() => ({
      grid,
      currentPlayer: this.getNextPlayer(),
    }), () => {
      this.setState({
        status: this.getStatus()
      })
    });
  }

  renderCell(index) {
    return <Cell
      value={this.state.grid[index]}
      onClick={() => this.handleClick(index)}
    />;
  }

  isBoardFull() {
    return this.state.grid.every(cell => cell != null)
  }

  getWinner() {
    const grid = this.state.grid;
    for (let line = 0; line < 9; line += 3) {
      if (grid[line] && grid[line] === grid[line + 1] && grid[line + 1] === grid[line + 2]) return grid[line];
    }

    for (let row = 0; row < 9; row += 3) {
      if (grid[row] && grid[row] === grid[row + 3] && grid[row + 3] === grid[row + 6]) return grid[row];
    }

    if (grid[4] && (
      (grid[0] === grid[4] && grid[4] === grid[8]) ||
      (grid[2] === grid[4] && grid[4] === grid[6])
    )) return grid[4];

    return null;
  }

  getStatus() {
    const winner = this.getWinner();
    if (winner) {
      return `Winner: ${winner}`;
    } else if(this.isBoardFull()) {
      return 'Game Over - No winner';
    }
    return `Next player: ${this.getNextPlayer()}`
  }

  render() {
    return (
      <div>
        <div className="status">{this.state.status}</div>
        <div className="board-row">
          { this.renderCell(0) }
          { this.renderCell(1) }
          { this.renderCell(2) }
        </div>
        <div className="board-row">
          { this.renderCell(3) }
          { this.renderCell(4) }
          { this.renderCell(5) }
        </div>
        <div className="board-row">
          { this.renderCell(6) }
          { this.renderCell(7) }
          { this.renderCell(8) }
        </div>
      </div>
    );
  }
}
