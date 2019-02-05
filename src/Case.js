import React, { Component } from 'react';
import './App.css';

export default class Case extends Component {

    render() {
        return (
            <button className="cell" onClick={() => { this.props.handleClick() }}>
                {this.props.value}
            </button>
        )
    }
}