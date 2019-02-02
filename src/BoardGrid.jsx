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
    return this.state.grid.every(cell => cell != null);
  }

  getWinner() {
    const grid = this.state.grid;
    // 0 == 1 == 2; 3 == 4 == 5; 6 == 7 == 8
    for (let index = 0; index < 9; index += 3) {
      if (grid[index] != null && grid[index] === grid[index + 1] && grid[index + 1] === grid[index + 2]) return grid[index];
    }
    // 0 == 3 == 6
    for (let index = 0; index < 9; index += 3) {
      if (grid[index] != null && grid[index] === grid[index + 3] && grid[index + 3] === grid[index + 6]) return grid[index];
    }

    if (grid[4] != null && (
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
