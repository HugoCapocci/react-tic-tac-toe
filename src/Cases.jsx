import React, { Component } from 'react';
import './App.css';

export default class Cases extends Component {

    render()
    {
        return <div className="cases">{ this.props.valeur }</div>
    }
}