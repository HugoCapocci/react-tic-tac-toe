import React, {Component} from 'react';


export default class Cases extends Component{

    getStyle() {
        return {
            cursor: this.props.value ? 'default' : 'pointer'
        }
    }

    render() {
        return (
            <button
                className="case"
                style={this.getStyle()}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}