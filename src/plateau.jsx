import React, {Component } from 'react';
import Carre from './carre.jsx';

export default class plateau extends Component {
constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderTd(i) {
    return (
      <Carre
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

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
