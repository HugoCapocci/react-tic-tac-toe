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
  }

  getNextPlayer() {
    if (this.state.currentPlayer === PLAYER_1) return PLAYER_2;
    return PLAYER_1;
  }

  handleClick(index) {
      const grid = [...this.state.grid];
      grid[index] = this.state.currentPlayer;
      this.setState({
        grid,
        currentPlayer: this.getNextPlayer()
      });
  }

  renderCell(index) {
    return <Cell
      value={this.state.grid[index]}
      onClick={() => this.handleClick(index)}
    />;
  }

  render() {
    const status = `Next player: ${this.getNextPlayer()}`;
    return (
      <div>
        <div className="status">{status}</div>
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