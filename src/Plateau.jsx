import React, { Component } from 'react';
import Case from './Case';
import index from './index';
import calculateWinner from './history';

export default class Plateau extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cases: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const cases = current.cases.slice();
    if (calculateWinner(cases) || cases[i]) {
      return;
    }
   
    cases[i] = this.state.xIsNext ? 'X' : 'O'; 
    document.getElementById.style.cursor = "default";

    
    
    this.setState({
      history: history.concat([{
        casees: cases,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }


  renderCase(i) {    
    return (
      <Case
        value={this.props.cases[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
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