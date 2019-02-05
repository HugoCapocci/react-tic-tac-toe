import React, { Component } from 'react';
import logo from './logo.svg';
import Case from './Case';
import './App.css';


export default class PLateau extends Component {
  render() {
    return (
        <div className="App">
            <h2>Next player : X</h2>    
            <div >
                < Case />
                < Case />
                < Case />
            </div>
            <div >
                < Case />
                < Case />
                < Case />
            </div>
            <div >
                < Case />
                < Case />
                < Case />
            </div>
      </div>
    );
  }
}

