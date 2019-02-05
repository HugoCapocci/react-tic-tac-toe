import React, { Component } from 'react';

export default class SquareComponent extends Component{

    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }



}