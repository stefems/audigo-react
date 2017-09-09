import React, { Component } from 'react';
import {   BrowserRouter as Router, Link, Route, Switch, Redirect }
 from 'react-router-dom';
import GoogleMap from './GoogleMap.js';

class Listen extends Component {

	constructor(props){
		super(props);
		this.state = {
			test: props.location.state
		}
	}
	componentDidMount() {

	}
	render() {
		if (this.state.test) {
			return (
			  <div>
			  	<GoogleMap />
			  	<h1>{this.state.test.shouldRedirect}</h1>
			  </div>
			);
		}
		else {
			return ( <Redirect to="/"></Redirect> );
		}
		
	}

}

export default Listen;
