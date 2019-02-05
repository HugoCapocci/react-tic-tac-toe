import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPOSANTS
// import Plateau from './plateau.js';
// import Jeu     from './jeu.js';
// import Case    from './case.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p id="titre">Next player: X</p>
        <div id="plateau">
          <table>
            <tr>
              <td class="cell"></td>
              <td class="cell"></td>
              <td class="cell"></td>
            </tr>
            <tr>
              <td class="cell"></td>
              <td class="cell"></td>
              <td class="cell"></td>
            </tr>
            <tr>
              <td class="cell"></td>
              <td class="cell"></td>
              <td class="cell"></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
