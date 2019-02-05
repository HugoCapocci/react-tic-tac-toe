import React, { Component } from 'react';

export default class SquareComponent extends Component{

    getStyle() {
        return {
            cursor: this.props.value ? 'default' : 'pointer'
        }
    }

    render() {
        return (
            <button
                className="square"
                style={this.getStyle()}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }

}