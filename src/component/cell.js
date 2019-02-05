import React, { Component } from 'react';
import Cell from "./grille";

export default class Grille extends Component {

    state = {
        InValue : null,
    }


    AffP = () => {
       this.setState({InValue:"X"});
    }

    render() {
        return (

            <button onClick={this.AffP} className='cell'>{this.state.InValue}</button>
        );
    }
}