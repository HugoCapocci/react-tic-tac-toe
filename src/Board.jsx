import React, { Component } from 'react';
import Cell from './Cell';

export default class Board extends Component {


    renderCell(i) {
        return <Cell value={this.props.cells[i]}  onClick={() => this.props.onClick(i)}/>;
    }



    render() {

        return (
            <div>

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