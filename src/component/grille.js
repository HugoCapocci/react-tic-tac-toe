import React, { Component } from 'react';
import Cell from './cell.js';

export default class Grille extends Component {
    render() {
        return (
            <div>
                <div className='boardRow'>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
                <div className='boardRow'>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>
                <div className='boardRow'>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </div>

            </div>
        );
    }
}