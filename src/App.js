import React, { Component } from 'react';
import './App.css';
import Case from './Case.js';

function calculateWinner(cells) {
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
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      player: "X"
    }
  }
  
  handleClick = (index) => {
    this.setState(prevState => {
      const cells = [...prevState.cells];
      if (calculateWinner(cells) || cells[index]) {
        return;
      }
      if(!cells[index]) {
        cells[index] = prevState.player;
        if(prevState.player === "X") {
          this.setState({
            player: "O",
          })
        }
        else {
          this.setState({
            player: "X",
          })
        }
      }
      return {
        cells
      }
    });
  }

  render() {

    const winner = calculateWinner(this.state.cells);
    let status;
    if (winner) {
      status = 'Winner: ' + winner + ' !';
    } else {
      status = 'Next player: ' + (this.state.player ? 'X' : 'O');
    }

    return (
      <div className="App">

      <h2>{status}</h2>

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
