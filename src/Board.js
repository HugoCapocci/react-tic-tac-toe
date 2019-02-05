import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {
    static renderSquare(i) {
        return <Cell value={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">
                    {status}
                </div>

            <table>
                <tbody>
                <tr>
                    <td>{Board.renderSquare(0)}</td>
                    <td>{Board.renderSquare(1)}</td>
                    <td>{Board.renderSquare(2)}</td>
                </tr>
                <tr>
                    <td> {Board.renderSquare(3)}</td>
                    <td>{Board.renderSquare(4)}</td>
                    <td>{Board.renderSquare(5)}</td>
                </tr>
                <tr>
                    <td>{Board.renderSquare(6)}</td>
                    <td>{Board.renderSquare(7)}</td>
                    <td>{Board.renderSquare(8)}</td>
                </tr>
                </tbody>

            </table>
            </div>
        );
    }
}