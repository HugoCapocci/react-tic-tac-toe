import React, { Component } from 'react';
import './App.css';
import Case from './Case.js';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h2>Next player: X</h2>

        <header className="App-header">

          <div>
            <Case />
            <Case />
            <Case />
          </div>
          
          <div>
            <Case />
            <Case />
            <Case />
          </div>

          <div>
            <Case />
            <Case />
            <Case />
          </div>

        </header>
      </div>
    );
  }
}

export default App;
