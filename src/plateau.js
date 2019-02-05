import React, {Component } from 'react';

export default class plateau extends Component {

	constructor(props) {
		super(props);
		this.state = { squares: Array(9).fill(null) };
	}

	renderTd(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
	}

  render() {
    const status = 'Next player: X';

    return (
      <div id="plateau">
        <div id="status">{status}</div>
	        <table>
	          <tr>
		          {this.renderTd(0)}
		          {this.renderTd(1)}
		          {this.renderTd(2)}
	          </tr>
	          <tr>
		          {this.renderTd(3)}
		          {this.renderTd(4)}
		          {this.renderTd(5)}
	          </tr>
	          <tr>
		          {this.renderTd(6)}
		          {this.renderTd(7)}
		          {this.renderTd(8)}
	          </tr>
	        </table>
      </div>
    );
  }

}
