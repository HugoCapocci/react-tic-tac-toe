import React,{Component} from 'react';

export default class Square extends Component
{
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.handleClick()}
            >
                {this.props.value}
            </button>
        );
    }
}