import React, { Component } from 'react';
import Game from './Game';
import Cases from './Cases';
import './Board.css';
import './App.css';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

export default class Board extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
          grid: Array(9).fill(null),
          currentPlayer: PLAYER_1
        };
    }

    getNextPlayer() {
        if (this.state.currentPlayer === PLAYER_1) return PLAYER_2;
        return PLAYER_1;
    }

    handleClick(index) 
    {
        const grid = [...this.state.grid];

        if (grid[index]) return;
        grid[index] = this.state.currentPlayer;
        this.setState({
          grid,
          currentPlayer: this.getNextPlayer()
        });
    }

      renderCases(index) 
      {
        return <Cases
          value={this.state.grid[index]}
          onClick={() => this.handleClick(index)}
        />;
    }

    render() 
    {
        const status = `Next player: ${this.state.currentPlayer}`;
        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderCases(0)}
                {this.renderCases(1)}
                {this.renderCases(2)}
            </div>
            <div className="board-row">
                {this.renderCases(3)}
                {this.renderCases(4)}
                {this.renderCases(5)}
            </div>
            <div className="board-row">
                {this.renderCases(6)}
                {this.renderCases(7)}
                {this.renderCases(8)}
            </div>
        </div>
        );
    }
}