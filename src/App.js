import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board.jsx';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state ={
      turn: 'X',
      gameEnded: false,
      board : Array(9).fill('')
    }
  }

  clicked(event){

    if(this.state.board[event.target.dataset.square] == ''){
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn ='X' ? 'O' : 'X',
        board : this.state.board
      })
    }
    console.log(this.state.board);
  }

  render() {
    return (
      <div id="game">
        <div id="head">
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
      </div>
    );
  }
}

export default App;
