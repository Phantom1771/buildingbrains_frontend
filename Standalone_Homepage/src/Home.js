import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Customize from './Customize.js'

class Home extends Component {
  render() {
    return (
      <div className="Home" >
			<Welcome />
			<Customize /> 
      </div>
    );
  }
}

export default Home;
