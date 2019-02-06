import React, { Component } from 'react';


export default class Case extends React.Component {
    render() {
      return (
        <button className="cases" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      );
  }
} 