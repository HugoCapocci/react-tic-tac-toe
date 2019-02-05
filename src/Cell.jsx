import React, { Component } from 'react';


export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

 render() {
   return (
  <button className="cell" onClick={this.props.onClick}>
    {this.props.value}
  </button>
);
  }
}
