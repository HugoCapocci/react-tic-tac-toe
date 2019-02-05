import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Board extends Component {
  render() {
    return (
      <div className="App">
      <h3>Next Player : X</h3>
        <div>
            <button class="cell"></button>
            <button class="cell"></button>
            <button class="cell"></button>            
        </div>
        <div>
            <button class="cell"></button>
            <button class="cell"></button>
            <button class="cell"></button>            
        </div>
        <div>
            <button class="cell"></button>
            <button class="cell"></button>
            <button class="cell"></button>            
        </div>
      </div>
    );
  }
}

export default Board;
