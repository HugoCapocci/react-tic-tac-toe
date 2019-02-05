import React, { Component } from 'react';


export default class Square extends React.Component {
  render() {
    return (
      <button id={this.props.id} className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}