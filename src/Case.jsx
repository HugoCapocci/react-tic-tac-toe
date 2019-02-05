import React, {Component} from 'react';


export default class Case extends Component{
    
    
    render(){
        return (
            <button className="case">{this.props.value}</button>


        );
    }
    
    
}