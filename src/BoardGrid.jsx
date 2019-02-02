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
          <Cell value={0} />
          <Cell value={1} />
          <Cell value={2} />
        </div>
        <div className="board-row">
          <Cell value={3} />
          <Cell value={4} />
          <Cell value={5} />
        </div>
        <div className="board-row">
          <Cell value={6} />
          <Cell value={7} />
          <Cell value={8} />
        </div>
      </div>
    );
  }
}