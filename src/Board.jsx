import React, { Component } from 'react';
import Game from './Game';
import Cases from './Cases';

export default class Board extends Component {

    render() 
    {
        const status = "Next player: X";
        return (
        <div>
            <div className="status">{status}</div>
            <table border="1">
                <tr>
                    <td><Cases/></td>
                    <td><Cases/></td>
                    <td><Cases/></td>
                </tr>
                <tr>
                    <td><Cases/></td>
                    <td><Cases/></td>
                    <td><Cases/></td>
                </tr>
                <tr>
                    <td><Cases/></td>
                    <td><Cases/></td>
                    <td><Cases/></td>
                </tr>
            </table>
        </div>
        )
    }
}