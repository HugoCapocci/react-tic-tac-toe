import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Case extends Component {
    state={
        'valueButton': null,
    }
    
    handleClick = ()  => {
        this.setState({'valueButton' :'X'} )
      }
    
 
  render() {
     
     // this.setState({'valueButton' : this.props.value} )
    return (
        <button className="cell" onClick={ this.handleClick }> { this.state.valueButton }</button>
    );
  }
}

