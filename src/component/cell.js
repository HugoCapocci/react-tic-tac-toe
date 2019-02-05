import React, { Component } from 'react';
import Cell from "./grille";

export default class Grille extends Component {
    render() {
        return (
            <button className='cell'>{this.props.value}</button>
        );
    }
}