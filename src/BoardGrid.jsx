import React, { Component } from 'react';
import Cell from './Cell';

import './BoardGrid.css';

export default class BoardGrid extends Component {

  renderCell(index) {
    return <Cell
      value={this.props.grid[index]}
      onClick={() => this.props.onClick(index)}
    />;
  }

  render() {
    return (
      <div>
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
