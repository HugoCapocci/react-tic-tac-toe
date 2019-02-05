import React, { Component } from 'react';
import './App.css';

export default class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="cell" onClick={() => { this.setState({value: 'X'}); }}>
                {this.state.value}
            </button>
        )
    }
}