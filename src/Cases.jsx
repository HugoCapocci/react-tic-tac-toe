import React, { Component } from 'react';
import './Cases.css';
import './App.css';

export default class Cases extends Component {

    render()
    {
        return (
        <button className="cases" onClick={this.props.onClick}>
            { this.props.value }
        </button>
        );
    }
}