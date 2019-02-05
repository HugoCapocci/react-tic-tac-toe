import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            
        };
    }

    render() {
        return (
            <button class="cell" onClick= { () => {this.props.onClick() }}>
                {this.props.value}
            </button>
        );
    }
}

export default Cell;
