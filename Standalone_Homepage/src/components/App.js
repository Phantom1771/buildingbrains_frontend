import React, { Component } from 'react';

import Nav from './Nav.js';
import Headers from './Headers.js';
import Home from './Home.js'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Headers />
        <Nav/>
        {this.props.children || <Home />}
      </div>
    )
  }
}

export default App;
