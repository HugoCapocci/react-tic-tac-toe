import React, { Component } from 'react';
import Cell from './cell.js';

export default class Grille extends Component {
    render() {
        return (
            <div>
                <div className='boardRow'>
                    <Cell value='0'/>
                    <Cell value='1'/>
                    <Cell value='2'/>
                </div>
                <div className='boardRow'>
                    <Cell value='3'/>
                    <Cell value='4'/>
                    <Cell value='5'/>
                </div>
                <div className='boardRow'>
                    <Cell value='6'/>
                    <Cell value='7'/>
                    <Cell value='8'/>
                </div>

            </div>
        );
    }
}