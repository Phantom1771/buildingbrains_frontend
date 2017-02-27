import React, { Component } from 'react';

import Nav from './Nav.js';
import Headers from './Headers.js';
import Home from './Home.js'
import Auth from '../Auth.js'
import Login from '../routes/Login/components/Login.js'
class App extends Component {
  render() {
    const isLoggedIn = Auth.loggedIn();
    return (
      <div className="App">
        <Headers />
        {isLoggedIn ? <Nav/> : <Login/>}
        {this.props.children || <Home />}
      </div>
    )
  }
}

export default App;
