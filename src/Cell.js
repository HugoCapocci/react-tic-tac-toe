import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component {  

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: null,
    //     };
    // }

    state = {
        value : null,
    };

    handleClick = () => {
        this.setState({value: this.props.value})
    }

  render() {
    return (
         <button class="cell" onClick={() => {this.handleClick()}}>
            {this.state.value}
        </button>
    );
  }
}

export default Cell;
