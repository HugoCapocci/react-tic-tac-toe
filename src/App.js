import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPOSANTS
import Jeu from './jeu.jsx';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Jeu/>
      </div>
    );
  }
}

export default App;
