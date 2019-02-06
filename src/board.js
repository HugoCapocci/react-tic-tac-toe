import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
import Button from './Button';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cells: Array(9).fill(null),
            player: PLAYER_1
        }
        this.endGame = false;
    }

    getNextPlayer() {
        if (this.state.player === PLAYER_1) return PLAYER_2;
        return PLAYER_1;
    }

    renderHistory() {
        const history = this.state.history;
        return history.map((step, index) => {
            const desc = index != 0 ?
                'Go to move #' + index : 'Go to game start';
            return (
                <li key={index}>
                 <button>{desc}</button>
                </li>
            );
        });
    }

    handleClick(i) {
        const cells = this.state.cells.slice();
        if (this.calculateWinner(cells)) {
            return;
        }
        if (!cells[i]) {
            cells[i] = this.state.player;
            this.setState({ 
                cells: cells,
                player: this.getNextPlayer()
            });
        } else {
            alert('Case déjà cochée');
        }
    }

    replay() {
        let cells = Array(9).fill(null);
        this.setState({ cells: cells });
        this.endGame = false;
        this.setState({ player: PLAYER_1})
    }

    calculateWinner(cells) {
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
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }
        return null;
    }

    isEnd() {
        for (let i = 0; i < this.state.cells.length; i++) {
            if (this.state.cells[i] == null) {
                return false;
            }
        }
        return true;
    }

    renderCell(i) {
        return (
            <Cell
                value={this.state.cells[i]}
                index={i}
                onClick={() => this.handleClick(i)} />
        );
    }

    render() {
        let status;
        const winner = this.calculateWinner(this.state.cells);
        if (winner) {
            status = 'Winner: ' + winner;
            this.endGame = true;
        }
        else if (this.isEnd()) {
            status = 'Game Over';
            this.endGame = true;
        } else {
            status = 'Next player: ' + this.state.player;
        }
        return (
            <div className="App">
                <h3>{status}</h3>
                {this.endGame ? <Button onClick={() => this.replay()} /> : null}
                <br/><br/>
                <div>
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                </div>
                <div>
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div>
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                </div>
            </div>
        );
    }
}
export default Board;