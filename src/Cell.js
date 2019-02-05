import React, { Component } from 'react';


export default class Cell extends Component {
    render() {
        return (
            <button className="cell">
                {this.props.value}
            </button>
        );
    }
}