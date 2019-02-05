import React, { Component } from 'react';
import logo from './logo.svg';
import Case from './Case';
import './App.css';


export default class Plateau extends Component {
  render() {
    return (
        <div className="App">
        
            <header className="App-header">
                <h2>Next player : X</h2>    
                <div >
                    < Case value="0" />
                    < Case value="1" />
                    < Case value="2" />
                </div>
                <div >
                    < Case value="3" />
                    < Case value="4" />
                    < Case value="5" />
                </div>
                <div >
                    < Case value="6" />
                    < Case value="7" />
                    < Case value="8" />
                </div>
            </header>
      </div>
    );
  }
}

