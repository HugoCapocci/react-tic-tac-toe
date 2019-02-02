import React, { Component } from 'react';
import Cell from './Cell';

import './BoardGrid.css';

export default class BoardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
    };
  }

  handleClick(index) {
      const grid = [...this.state.grid];
      grid[index] = 'X';
      this.setState({ grid });
  }

  renderCell(index) {
    return <Cell
      value={this.state.grid[index]}
      onClick={() => this.handleClick(index)}
    />;
  }

  render() {
    const status = 'Next player: X';
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