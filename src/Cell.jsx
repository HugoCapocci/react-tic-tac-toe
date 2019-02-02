import React, { Component } from 'react';

import './Cell.css';

export default class Cell extends Component {
  getStyle() {
    return {
      cursor: this.props.value ? 'default' : 'pointer'
    }
  }

  render() {
    return (
      <button
        className="cell"
        style={this.getStyle()}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
