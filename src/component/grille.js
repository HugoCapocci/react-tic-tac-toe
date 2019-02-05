import React, { Component } from 'react';
import Cell from './cell.js';

export default class Grille extends Component {

    constructor(props){
        super(props)
        this.state = {
            values : [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            player : "X",
        }
    }

    AffP = (index) => {
        this.setState(
            prevState => {
                const values = [...prevState.values];
                let player = '';
                values[index] = prevState.player;
                if (prevState.values[index]!=null){

                }
                if (prevState.player == 'X')
                {
                    player = 'O';
                }
                else
                {
                    player = 'X';
                }
                return {
                    values,
                    player
                }
            }
        );
    }

    render() {
        return (
            <div>
                <div className='boardRow'>
                    <Cell value={this.state.values[0]} index={"0"} Affp={()=>this.AffP(0)}/>
                    <Cell value={this.state.values[1]} index={"1"} Affp={()=>this.AffP(1)}/>
                    <Cell value={this.state.values[2]} index={"2"} Affp={()=>this.AffP(2)}/>
                </div>
                <div className='boardRow'>
                    <Cell value={this.state.values[3]} index={"3"} Affp={()=>this.AffP(3)}/>
                    <Cell value={this.state.values[4]} index={"4"} Affp={()=>this.AffP(4)}/>
                    <Cell value={this.state.values[5]} index={"5"} Affp={()=>this.AffP(5)}/>
                </div>
                <div className='boardRow'>
                    <Cell value={this.state.values[6]} index={"6"} Affp={()=>this.AffP(6)}/>
                    <Cell value={this.state.values[7]} index={"7"} Affp={()=>this.AffP(7)}/>
                    <Cell value={this.state.values[8]} index={"8"} Affp={()=>this.AffP(8)}/>
                </div>
            </div>
        );
    }
}