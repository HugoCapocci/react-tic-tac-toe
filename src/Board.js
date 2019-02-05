import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.player = 'X';
        this.state = {
            squares: Array(9).fill(null),
        };
        this.endGame = false;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || this.endGame) {
            return;
        }
        if (!squares[i]) {
            squares[i] = this.player;
            this.setState({ squares: squares });
            if (this.player === 'X')
                this.player = 'O';
            else
                this.player = 'X';
        } else {
            alert('Déjà cocher !')
        }
    }

    calculateWinner() {
        const squares = this.state.squares;
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

    isEnd() {
        let full = true;
        for (let i = 0; i < this.state.squares.length; i++) {
            if (this.state.squares[i] == null) {
                return false;
            }
        }

        return true;
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            this.endGame = true;
        }
        else if (this.isEnd()) {
            status = 'Game Over';
            this.endGame = true;
        } else {
            status = 'Next player: ' + this.player;
        }

        return (
            <header className="App-header">
                <h3>{status}</h3>
                {this.endGame ? <button>Replay</button> : null}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </header>
        );
    }
}

export default Board;
