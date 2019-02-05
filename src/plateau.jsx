import React, {Component } from 'react';
import Carre from './carre.jsx';

export default class plateau extends Component {
constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if(squares[i] != null) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    document.getElementById(i).style.cursor ="default";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderTd(i) {
    return (
      <Carre id={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

		return (
		  <div>
		    <div className="status">{status}</div>
		    <div className="board-row">
		      {this.renderTd(0)}{this.renderTd(1)}{this.renderTd(2)}
		    </div>
		    <div className="board-row">
		      {this.renderTd(3)}{this.renderTd(4)}{this.renderTd(5)}
		    </div>
		    <div className="board-row">
		      {this.renderTd(6)}{this.renderTd(7)}{this.renderTd(8)}
		    </div>
		  </div>
		);
  }

}
