import React, {Component} from 'react';
import Case from './Case.jsx';
export default class Board extends Component {
    
    renderCase(i){

        return <Case value={i} />;
    }
    render() {
        const tour = 'Next Player : X';

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
