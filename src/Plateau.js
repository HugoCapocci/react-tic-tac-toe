import React, { Component } from 'react';
import logo from './logo.svg';
import Case from './Case';
import './App.css';


export default class Plateau extends Component {
    
    
    state={
      cells : [
          null,  null, null,
          null, null, null,
          null, null, null
      ],
      player: 'X',
    }
    handleClick = (index)  => {
            this.setState(prevState =>{
                const cells= [...prevState.cells];
                if(!cells[index]){
                    cells[index]= prevState.player;
                    if(prevState.player=="X")
                    {
                        this.setState({ player: 'O'});
                        
                    }else{
                        this.setState({ player: 'X'});
                    }
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
                <h2>Next player : { this.state.player }</h2>    
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

