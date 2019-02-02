import React, { Component } from 'react';
import BoardGrid from './BoardGrid';

import './Cell.css';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          grid: Array(9).fill(null),
          currentPlayer: PLAYER_1
        }
      ],
      currentStep: 0
    };
    this.state.status = this.getStatus();
  }

  getNextPlayer() {
    const current = this.state.history[this.state.currentStep];
    if (current.currentPlayer === PLAYER_1) return PLAYER_2;
    return PLAYER_1;
  }

  handleClick(index) {
    // on redécoupe l'historique au besoin (si on revient en arrière)
    const history = this.state.history.slice(0, this.state.currentStep + 1);
    const current = history[history.length - 1];
    const grid = [...current.grid];
    if (grid[index] || this.getWinner()) return;

    grid[index] = current.currentPlayer
    this.setState({
      history: history.concat([
        {
          grid,
          currentPlayer: this.getNextPlayer(),
        }
      ]),
      currentStep: history.length,
    });
  }

  isBoardFull() {
    const current = this.state.history[this.state.currentStep];
    return current.grid.every(cell => cell != null)
  }

  getWinner() {
    const { grid } = this.state.history[this.state.currentStep];
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

  jumpTo(step) {
    this.setState({
      currentStep: step,
    });
  }

  renderHistoryMove() {
    const history = this.state.history;
    return history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{ desc }</button>
        </li>
      );
    });
  }

  render() {
    const current = this.state.history[this.state.currentStep];
    return (
      <div className="game">
        <BoardGrid 
          grid={current.grid}
          onClick={index => this.handleClick(index)}
        />
        <div className="game-info">
          <div>{ this.getStatus() }</div>
          <ol>{ this.renderHistoryMove() }</ol>
        </div>
      </div>
    );
  }
}
