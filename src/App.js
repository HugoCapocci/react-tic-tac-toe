import React, { Component } from 'react';
import './App.css';
import Case from './Case.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        null, 'X', 'X',
        null, 'X', null,
        null, null, 'X'
      ]
    }
  }
  
  handleClick = (index) => {
    this.setState(prevState => {
      const cells = [...prevState.cells];
      cells[index] = 'X';
      return {
        cells
      }
    });
}

  render() {
    return (
      <div className="App">

      <h2>Next player: X</h2>

        <header className="App-header">

          <div>
            <Case value={this.state.cells[0]} handleClick={() => this.handleClick(0)} />
            <Case value={this.state.cells[1]} handleClick={() => this.handleClick(1)} />
            <Case value={this.state.cells[2]} handleClick={() => this.handleClick(2)} />
          </div>
          
          <div>
            <Case value={this.state.cells[3]} handleClick={() => this.handleClick(3)} />
            <Case value={this.state.cells[4]} handleClick={() => this.handleClick(4)} />
            <Case value={this.state.cells[5]} handleClick={() => this.handleClick(5)} />
          </div>

          <div>
            <Case value={this.state.cells[6]} handleClick={() => this.handleClick(6)} />
            <Case value={this.state.cells[7]} handleClick={() => this.handleClick(7)} />
            <Case value={this.state.cells[8]} handleClick={() => this.handleClick(8)} />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
