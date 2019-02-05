import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            xIsNext: true,
        };
    }


    renderCell(i) {
        return <Cell value={this.state.cells[i]}  onClick={() => this.handleClick(i)}/>;
    }

    handleClick(i) {
        const cells = this.state.cells.slice();
        if (this.calculateWinner(cells) || cells[i])
            return;
        cells[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            cells: cells,
            xIsNext: !this.state.xIsNext
        });
    }

     calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner = this.calculateWinner(this.state.cells);
        var status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">
                    {status}
                </div>

            <table>
                <tbody>
                <tr>
                    <td>{this.renderCell(0)}</td>
                    <td>{this.renderCell(1)}</td>
                    <td>{this.renderCell(2)}</td>
                </tr>
                <tr>
                    <td>{this.renderCell(3)}</td>
                    <td>{this.renderCell(4)}</td>
                    <td>{this.renderCell(5)}</td>
                </tr>
                <tr>
                    <td>{this.renderCell(6)}</td>
                    <td>{this.renderCell(7)}</td>
                    <td>{this.renderCell(8)}</td>
                </tr>
                </tbody>

            </table>
            </div>
        );
    }
}