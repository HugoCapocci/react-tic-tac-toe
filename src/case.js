import React, {Component } from 'react';

export default class MyComponent extends Component {

	constructor(props){
		super();
		// this.res = props.value.split('').join(' ').toUpperCase();
		this.res = props.value.split(' ').join('\n');
	}

	render(){
		// let res = "";
		// for (let i = 0; i < this.props.value.length; i++) {
		// 	{
		// 		res += this.props.value[i].toUpperCase() + " ";
		// 	}
		// }

		// const res2  = this.props.value.split('').join(' ').toUpperCase();

		// let res = "";
		// for (let i = 0; i < this.props.value.length; i++) {
		// 	{
		// 		res += this.props.value[i].toUpperCase() + " ";
		// 	}
		// }

		return <p>{this.res}</p>
	}

}