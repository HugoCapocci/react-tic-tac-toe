import React, { Component } from 'react';
import Game from './Game';
import Cases from './Cases';
import './Board.css';
import './App.css';

export default class Board extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
          grid: Array(9).fill(null),
        };
    }

    handleClick(index) 
    {
        const grid = [...this.state.grid];
        grid[index] = 'X';
        this.setState({ grid });
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
        const status = "Next player: X";
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