import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPOSANTS
import Jeu from './jeu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jeu/>
      </div>
    );
  }
}

export default App;
