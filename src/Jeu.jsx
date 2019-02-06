import React, { Component } from 'react';
import Plateau from './Plateau';
import calculateWinner from './history';


export default class Jeu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        cases: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const cases = current.cases.slice();
    if (calculateWinner(cases) || cases[i]) {
      return;
    }
    cases[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          cases: cases
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.cases);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Mouvement #' + move :
        'Nouvelle partie';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Vainqueur: " + winner;
    } else {
      status = "Joueur Suivant: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="jeu">
        <div className="jeu-board">
          <Plateau
            cases={current.cases}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="jeu-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
