import React, { Component } from 'react';
import Plateau from './Plateau';

export default class Jeu extends Component {
  render() {
    return (
      <div className="jeu">
        <div className="jeu-plateau">
          <Plateau />
        </div>
        <div className="jeu-info">
          <div> {/* status */} </div>
          <ol> {/* TODO */} </ol>
        </div>
      </div>
    );
  }
}
  