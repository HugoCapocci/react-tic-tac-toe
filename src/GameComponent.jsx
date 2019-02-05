import React, { Component } from 'react';
import BoardComponent from "./BoardComponent";

export default class GameComponent extends Component{

    render() {
        return (
            <div className="game">
                <BoardComponent />
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

}