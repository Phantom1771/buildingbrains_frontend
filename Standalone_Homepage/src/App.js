import React, { Component } from 'react';
import Nav from './Nav.js';
import Headers from './Headers.js';
import Welcome from './Welcome.js';
import Notification from './Notification.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />        
        <Nav />
        <Welcome />
        <Notification /> 
      </div>
    );
  }
}

export default App;
