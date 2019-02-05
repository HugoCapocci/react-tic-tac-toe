import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class Board extends Component {
  render() {
    return (
      <div className="App">
      <h3>Next Player : X</h3>
        <div>
            <Cell/>
            <Cell/>
            <Cell/>           
        </div>
        <div>
            <Cell/>
            <Cell/>
            <Cell/>          
        </div>
        <div>
            <Cell/>
            <Cell/>
            <Cell/>          
        </div>
      </div>
    );
  }
}

export default Board;
