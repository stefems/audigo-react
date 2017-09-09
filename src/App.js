import React, { Component } from 'react';
import {   BrowserRouter as Router, Link, Route, Switch, Redirect }
 from 'react-router-dom';
import './App.css';
import Home  from './Home.js';
import Listen from './Listen.js';


class App extends Component {

  render() {
    // console.log("App.js rendering");
    return (
      <Router>
          <div> 
            <Link to="/">Home</Link>
            {' '}
            <a href="http://localhost:3000/login/send_to_spotify_for_login">Login</a>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/listen" component={Listen} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
