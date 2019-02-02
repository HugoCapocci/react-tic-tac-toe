import React, { Component } from 'react';
import BoardGrid from './BoardGrid';

import './Cell.css';

export default class Game extends Component {

  render() {
    return (
      <div className="game">
        <BoardGrid />
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}