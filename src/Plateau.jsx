import React, { Component } from 'react';
import Case from './Case';
import index from './index'

export default class Plateau extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cases: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const cases = this.state.cases.slice();

    if(cases[i] != null){
      return;
    }
    cases[i] = this.state.xIsNext ? 'X' : 'O';
    document.getElementById(i).style.cursor = "default";


    this.setState({
      cases:cases,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderCase(i) {    
    return (
      <Case
        id = {i}
        value={this.state.cases[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  calculateWinner(cases) {
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
      if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
        return cases[a];
      }
    }
    return null;
  }

  render() {
    const winner = calculateWinner(this.state.cases);
    let status;
    if (winner) {
      status = 'Vainqueur: ' + winner;
    } else {
      status = 'Prochain Joueur: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="plateau-row">
          {this.renderCase(0)}
          {this.renderCase(1)}
          {this.renderCase(2)}
        </div>
        <div className="plateau-row">
          {this.renderCase(3)}
          {this.renderCase(4)}
          {this.renderCase(5)}
        </div>
        <div className="plateau-row">
          {this.renderCase(6)}
          {this.renderCase(7)}
          {this.renderCase(8)}
        </div>
      </div>
    );
  }
}