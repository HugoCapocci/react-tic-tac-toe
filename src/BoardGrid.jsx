import React, { Component } from 'react';
import Cell from './Cell';

import './BoardGrid.css';

export default class BoardGrid extends Component {

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}