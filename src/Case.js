import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export default class Case extends Component {
  
  render() {
     
    return (
        <button className={ "cell" + (this.props.value ? ' selector' : ' pointer' )} onClick={ this.props.handleClick }> { this.props.value }</button>
    );
  }
}

