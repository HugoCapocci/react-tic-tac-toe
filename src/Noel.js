import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';
import Button from './Button';

class Noel extends Component {

    state = {
        show: true,
        time: this.props.time
    }

    doBlink() {
        this.setState(prevState => {
            console.log(this.state.show)
            return {show: !prevState};
        });
        this.intervalId = setTimeout(() => {
            this.doBlink();
        }, this.props.time)
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.doBlink();
        }, this.props.time)
    }

    // static getDrivedStateFromProps(props, state) {
    //     if (props.time === state.time) return
    //     state.time = props.time;
    // }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>{this.state.show && this.props.message}</div>
        );
    }


}

export default Noel;