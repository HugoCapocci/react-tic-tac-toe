import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = [
      'O', null, 'X',
      'X', 'X', 'O',
      'O', null, null,
    ];
  }

  renderCell(i) {
    return <Cell value={i} />;
  }

  render() {
    return (
      <div className="App">
        <h3>Next Player : X</h3>
        <div>
          {this.renderCell(this.state[0])}
          {this.renderCell(this.state[1])}
          {this.renderCell(this.state[2])}
        </div>
        <div>
          {this.renderCell(this.state[3])}
          {this.renderCell(this.state[4])}
          {this.renderCell(this.state[5])}
        </div>
        <div>
          {this.renderCell(this.state[6])}
          {this.renderCell(this.state[7])}
          {this.renderCell(this.state[8])}
        </div>
      </div>
    );
  }
}
export default Board;