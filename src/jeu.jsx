import React, {Component } from 'react';
import Plateau from './plateau.jsx';

export default class Jeu extends Component {
  render() {
    return (
      <div class="plateau">
        <div class="plateau-board">
          <Plateau/>
        </div>
        <div class="plateau-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}