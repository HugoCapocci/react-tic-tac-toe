import React, { Component } from 'react';
import './App.css';
import Board from './Board'

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                cells: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const cells = current.cells.slice();
        if (this.calculateWinner(cells) || cells[i])
            return;
        cells[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                cells: cells,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }


    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.cells);

      const moves = history.map((step, move) => {
          const desc = move ?
              'Go to move #' + move :
              'Go to game start';
          return (
              <li key={move}>
                  <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
          );
      });

      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }


      return (
        <div className="game">
          <div className="game-board">
            <Board cells={current.cells}
                    onClick={(i) => this.handleClick(i)}/>
          </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
  }
}

export default Game;
