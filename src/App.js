import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plateau from './Plateau';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Plateau />
      </div>
    );
  }
}

export default App;
