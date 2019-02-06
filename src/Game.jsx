// import React, { component } from 'react';
// import Board from './Board';
// import './App.css';

// const PLAYER_1 = 'X';
// const PLAYER_2 = 'O';

// export default class Game extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [
//                 {
//                     grid: Array(9).fill(null),
//                     currentPlayer: PLAYER_1
//                 }
//             ],
//             currentStep = 0
//         };
//         this.state.status = this.getStatus();
//     }

//     getNextPlayer() {
//         const current = this.state.history[this.state.currentStep];
//         if (current.currentPlayer === PLAYER_1) return PLAYER_2;
//         return PLAYER_1;
//     }

// }

