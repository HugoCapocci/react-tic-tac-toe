import React, { Component } from 'react';
import logo from './Tic_tac_toe.svg';
import './App.css';
import Board from './Board';
import Cell from './Cell';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon)
library.add(faLightbulb)

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        stylePath: './App.css',
        cssMode: 'Night',
        icolight: 'moon',
      };
    }

    handleButtonClick(){
      if(this.state.stylePath == './App2.css'){
        this.setState({stylePath: './App.css',cssMode: 'Night',icolight: 'moon'});
        // this.setState({cssMode: 'Night'});
        // this.setState({icolight: 'moon'});
      }else{
          this.setState({stylePath: './App2.css',cssMode: 'Light',icolight: 'lightbulb'});
          // this.setState({cssMode: 'Light'});
          // this.setState({icolight: 'lightbulb'});
      }


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
    handleClick(i) {
       const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
  this.setState({
    stepNumber: step,
    xIsNext: (step % 2) === 0,
  });
}

    render() {
   const history = this.state.history;
   const current = history[this.state.stepNumber];
   const winner = this.calculateWinner(current.squares);

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
   <h1>Tic Tac Toe</h1>
       <div className="game-board">
         <Board
           squares={current.squares}
           onClick={(i) => this.handleClick(i)}
         />

       </div>
       <div className="game-night">
       <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
       <button type="button" onClick={this.handleButtonClick.bind(this)}>{this.state.cssMode} mode <FontAwesomeIcon icon={this.state.icolight} /></button>
       </div>
       <div className="game-info">
         <div>{status}</div>
         <ol>{moves}</ol>
       </div>

     </div>


   );
 }
  }

export default App;
