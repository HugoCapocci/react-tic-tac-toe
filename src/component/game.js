import React, { Component } from 'react';
import Grille from './grille.js';

export default class Game extends Component {
    render() {
        return (
            <div>
                <h1>Next player: X</h1>
                <Grille/>
            </div>
        );
    }
}