import React, { Component } from 'react';
import Nav from './Nav.js';
import Headers from './Headers.js';
import Notification from './Notification.js';
import Home from './Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />        
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
