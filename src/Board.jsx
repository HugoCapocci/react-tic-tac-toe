import React, {Component} from 'react';
import Cases from './Cases.jsx';
export default class Board extends Component {


    constructor(props){

        super(props);
        this.state= {
            grid:Array(9).fill(null),
            player:'X',
        };
    }

    handleClick(index) {
        const grid = [...this.state.grid];
        //grid[index] = 'X';
        grid[index] =this.state.player;
        if(this.state.player === 'X'){
            this.setState({player:'O'});
        }
        else{
            this.setState({player:'X'});

        }
        this.setState({ grid });
    }

    
    renderCase(i){

        return <Cases value={this.state.grid[i]}

        onClick={() => this.handleClick(i)}

        />;
    }
    render() {
        const tour = 'Next Player : '+ this.state.player;

        return (
            <div>
                <div className="tour">{tour}</div>
                <div className="board-row">
                    {this.renderCase(0)}
                    {this.renderCase(1)}
                    {this.renderCase(2)}
                </div>
                <div className="board-row">
                    {this.renderCase(3)}
                    {this.renderCase(4)}
                    {this.renderCase(5)}
                </div>
                <div className="board-row">
                    {this.renderCase(6)}
                    {this.renderCase(7)}
                    {this.renderCase(8)}
                </div>
            </div>
        );
    }

    
}
