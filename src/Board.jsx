import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
        };
    }


    renderCell(i) {
        return <Cell value={this.state.cells[i]}  onClick={() => this.handleClick(i)}/>;
    }

    handleClick(i) {
        const cells = this.state.cells.slice();
        cells[i] = 'X';
        this.setState({cells: cells});
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