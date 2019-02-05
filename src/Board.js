import React,{Component} from 'react';


import Square from './Square';

function calculateWinner(squares) {
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

export default class Board extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} handleClick={()=>this.handleClick(i)}/>
    }

    render() {

        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return(
            <div>
                {status}
                <div>{this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}</div>
                <div>{this.renderSquare(4)}{this.renderSquare(5)}{this.renderSquare(6)}</div>
                <div>{this.renderSquare(7)}{this.renderSquare(8)}{this.renderSquare(9)}</div>
            </div>
       )
    }



}