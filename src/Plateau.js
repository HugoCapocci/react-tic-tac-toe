import React, { Component } from 'react';
import logo from './logo.svg';
import Case from './Case';
import './App.css';


function calculateWinner(squares) {
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
export default class Plateau extends Component {
    
    
    state={
      cells : [
          null,  null, null,
          null, null, null,
          null, null, null
      ],
      player: 'X',
      winner: false,
      status: 'Next Player: X',
    }
    handleClick = (index)  => {
            this.setState(prevState =>{
                const cells= [...prevState.cells];
                if(!cells[index] && !this.state.winner){
                    cells[index]= prevState.player;
                    if(prevState.player=="X")
                    {
                        this.setState({ player: 'O'});
                        
                    }else{
                        this.setState({ player: 'X'});
                    }
                }
                const winner = calculateWinner(cells);
                let status;
                if (winner) {        
                    this.setState({ 
                        winner: true,
                        status: 'Winner: '+ winner,
                    });
                }else {
                    this.setState({ 
                        status: 'Next Player: '+ this.state.player,
                    });
                }

                return {
                    cells
                }
            })        
    }
    isBoardFull(){
        // to DO
        // renvoyé true si le tableau est full
    }
    getWinner(){
        // retourne le gagnant
    }
  render() {  
    
    return (
        <div className="App">
        
            <header className="App-header">
                <h2>{ this.state.status }</h2>    
                <div >
                    < Case value={ this.state.cells[0] } handleClick={ () => this.handleClick(0) } />
                    < Case value={ this.state.cells[1] } handleClick={ () => this.handleClick(1) }  />
                    < Case value={ this.state.cells[2] } handleClick={ () => this.handleClick(2) } />
                </div>
                <div >
                    < Case value={ this.state.cells[3] } handleClick={ () => this.handleClick(3) } />
                    < Case value={ this.state.cells[4] } handleClick={ () => this.handleClick(4) } />
                    < Case value={ this.state.cells[5] } handleClick={ () => this.handleClick(5) } />
                </div>
                <div >
                    < Case value={ this.state.cells[6] } handleClick={ () => this.handleClick(6) } />
                    < Case value={ this.state.cells[7] } handleClick={ () => this.handleClick(7) } />
                    < Case value={ this.state.cells[8] } handleClick={ () => this.handleClick(8) } />
                </div>
            </header>
      </div>
    );
  }
}

