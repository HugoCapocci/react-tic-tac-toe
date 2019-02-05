import React, { Component } from 'react';


export default class Case extends React.Component {
    render() {
    return (
      <button id={this.props.id}
        className="case"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
} 