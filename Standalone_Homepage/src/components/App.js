import React, { Component } from 'react';

import Nav from './Nav.js';
import Headers from './Headers.js';
import Home from './Home.js'
import Auth from '../Auth.js'
import Devices from '../routes/Devices/components/Devices.js';
import DeviceAdder from '../routes/DeviceAdder/components/DeviceAdder.js';

class App extends Component {
  render() {
    const isLoggedIn = Auth.loggedIn();
    return (
      <div className="App">
        <Headers />
        {isLoggedIn ? <Nav/> : null}
        <div className="Home">
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
            {this.props.children || <Home />}
            </div>
       </div>
      </div>
    )
  }
}

export default App;
