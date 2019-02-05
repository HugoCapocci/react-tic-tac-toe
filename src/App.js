import React, { Component } from 'react';
import './App.css';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Next player : X</h3>
          <div>
            <Square index='0' />
            <Square index='1' />
            <Square index='2' />
          </div>
          <div>
            <Square index='3' />
            <Square index='4' />
            <Square index='5' />
          </div>
          <div>
            <Square index='6' />
            <Square index='7' />
            <Square index='8' />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
