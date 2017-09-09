import React, { Component } from 'react';
import {   BrowserRouter as Router, Link, Route, Switch, Redirect }
 from 'react-router-dom';
const queryString = require('query-string');
const axios = require('axios');

var data = false;

class Home extends Component {
	state = {
	    shouldRedirect: "false"
	};
	static contextTypes = { 
		router: React.PropTypes.object 
	} 
	constructor(props) {
		super(props);
		this.state = {
			shouldRedirect: data
		};
	}

	render() {
		if(this.state.shouldRedirect) {
			this.context.router.history.push({
				pathname: "/listen",
			    state: this.state
			});
			return (<h3>logging you in...</h3>);
			// BrowserHistory.push({
				
		}
		else {
			return (
			  <div>
			  	<h1>/Home</h1>
			  </div>
			);
		}
		
	}
	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn = () => {
		var parsed = queryString.parse(this.props.location.search);
		var at = parsed.access_token;
		let user = localStorage.getItem('audigo_user');
		if (at || user) {
			let access_token = at || user;
			//send to backend to perform request to ensure that the token is valid.
			axios
			    .get("/login/spotify_check_token/"+ access_token)
			    .then(res => {
			    	if (res.data) {
			    		console.log("redirect!");
			    		localStorage.setItem('audigo_user', access_token);
			    		this.setState({ shouldRedirect: "true" });
			    	}
			    	else {
			    		return "not logged in";
			    	}
			    })
			    .catch(err => {
			    	console.log(err);
			    	return "not logged in";
			    });
		}
		else {
			return "not logged in.";
		}
	}
}

export default Home;
